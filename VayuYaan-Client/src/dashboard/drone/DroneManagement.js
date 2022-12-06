import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../utils/constants';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FilterIcon from "../../Assets/filter.svg"
import EditIcon from "../../Assets/edit.svg"
import CreateIcon from "../../Assets/export.svg"
import DeleteIcon from "../../Assets/delete.svg"
import EyeIcon from "../../Assets/eye.svg"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function DroneManagement() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user)

    if (user.role !== 'admin') {
        console.log('here')
        window.location = "/adminaccess";
    }

    const [drones, setDrones] = useState([]);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const [currentDrone, setCurrentDrone] = useState();

    const [model, setModel] = useState('');
    const [service, setService] = useState('');
    const [status, setStatus] = useState('');

    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [farmerId, setFarmerId] = useState('');
    const [pilotId, setPilotId] = useState('')

    useEffect(() => {
        axios.get(`${url}/api/drone/`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                setDrones(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log('drones', drones);

    const deleteDrone = (id) => {
        axios.delete(`${url}/api/drone/delete/${id}`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const editDrone = (id) => {
        setShowEditPopup(true);
        const curDrone = drones.filter(function (drone) {
            return drone._id === id;
        })
        setCurrentDrone(curDrone)
        setModel(curDrone[0].model)
        setService(curDrone[0].service)
        setStatus(curDrone[0].status)
    }

    const editDroneRequest = () => {
        axios.put(`${url}/api/drone/edit/${currentDrone[0]._id}`, {
            model: model,
            service: service,
            status: status,
            zipcode: currentDrone[0].zipcode,
            country: currentDrone[0].country,
            farmerId: currentDrone[0].farmerId,
            pilotId: currentDrone[0].pilotId
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const createDrone = () => {
        setShowCreatePopup(true);
    }

    const createDroneRequest = () => {
        axios.post(`${url}/api/drone/create/`, {
            model: model,
            service: service,
            status: status,
            zipcode: zipcode,
            country: country,
            farmerId: farmerId,
            pilotId: pilotId
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log('currentDrone', currentDrone)

    return (
        <>
            <Navbar />
            <div className={styles['container']}>

                {
                    showEditPopup &&
                    <div className={styles['modal']}>
                        <div className={styles['modal-content']}>
                            <form>
                                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Drone Model" />
                                <input type="text" value={service} onChange={(e) => setService(e.target.value)} placeholder="Service" />
                                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" />
                                <input type="text" placeholder="Farmer Id" />
                                <input type="text" placeholder="Pilot Id" />
                                <input type="date" placeholder="Run time" />
                                <button onClick={editDroneRequest}>Submit</button>
                            </form>
                        </div>
                    </div>
                }

                {
                    showCreatePopup &&
                    <div className={styles['modal']}>
                        <div className={styles['modal-content']}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Enter Model" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={service} onChange={(e) => setService(e.target.value)} placeholder="Enter Service" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter Status" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Enter Zipcode" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={farmerId} onChange={(e) => setFarmerId(e.target.value)} placeholder="Enter FarmerId" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" value={pilotId} onChange={(e) => setPilotId(e.target.value)} placeholder="Enter PilotId" />
                                </Form.Group>

                                <center>
                                    <Button variant="primary" onClick={createDroneRequest}>
                                        Create
                                    </Button>
                                </center>
                            </Form>
                        </div>
                    </div>
                }

                <div className={styles['sidebar']}>
                    <div className={styles['title']}>
                        Dashboard
                    </div>
                    <div className={styles['options']} style={{ cursor: "pointer" }}>
                        <div className={styles['option']} onClick={() => window.location = '/dashboard/farmer/management'}>
                            Farmers Management
                        </div>
                        <div className={styles['option-select']} onClick={() => window.location = '/dashboard/drone/management'}>
                            Drone Management
                        </div>
                        <div className={styles['option']} onClick={() => window.location = '/dashboard/pilot/management'}>
                            Pilots Management
                        </div>
                        <div className={styles['option']} onClick={() => window.location = '/dashboard/farm/management'}>
                            Farms Management
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/drone/catalog'}>
                            Drone Tracking
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/admin/cloudDashboard'}>
                            Cloud Dashboard Status
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/admin/aimodels'}>
                            AI Models
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/admin/arvrtracking'}>
                            AR/VR Tracking
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/admin/statistics'}>
                            Statistics
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    {/* <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            Drone Management
                        </div>
                    </div> */}

                    <div className={styles['table']}>
                        <div className={styles['title']}>
                            All Drones
                        </div>
                        <div className={styles["create"]}>
                            <div className={styles['sub-header']}>
                                <div className={styles['row']}>
                                    {/* <buton className={styles['slt-drones']}>Simulated Drones</buton> */}
                                    <buton className={styles['create-slt']} onClick={createDrone}><img src={CreateIcon} alt="create" />Create Drone</buton>
                                </div>
                            </div>
                        </div>
                        <div className={styles['display']}>
                            <table>
                                <tr>
                                    <th>Drone ID#</th>
                                    <th>Drone Model</th>
                                    <th>Service</th>
                                    <th>Available, Booked, or Deployed Status</th>
                                    <th>Farmer Id</th>
                                    <th>Pilot Id</th>
                                    <th>Start time</th>
                                    <th><img src={FilterIcon} alt="filer" /></th>
                                </tr>
                                {
                                    drones.map((drone, index) => {
                                        return (
                                            <tr key={drone._id}>
                                                <td>{drone._id}</td>
                                                <td>{drone.model}</td>
                                                <td>{drone.service}</td>
                                                <td>{drone.status}</td>
                                                <td>{drone.farmerId}</td>
                                                <td>{drone.pilotId}</td>
                                                <td>{null}</td>
                                                <td className={styles['operations']}>
                                                    <button><img src={EyeIcon} alt="View" /></button>
                                                    <button onClick={() => deleteDrone(drone._id)}><img src={DeleteIcon} alt="delete" /></button>
                                                    <button onClick={() => editDrone(drone._id)}><img src={EditIcon} alt="edit" /></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DroneManagement;