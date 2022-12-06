import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';
import { Stepper } from 'react-form-stepper';

import axios from 'axios';
import { url } from '../../utils/constants';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function ScheduleOne()   {

    const { id } = useParams()

    const [drones, setDrones] = useState();

    const [zipcode, setZipcode] = useState();
    const [curService, setCurService] = useState();
    const [farmers, setFarmers] = useState([]);

    const [farmer, setFarmer] = useState('');

    let pilot = cookies.get('pilot');

    let services = drones && drones.map(function(drone) {
        return drone.service;
    });
    services = services && services.filter((v, i, a) => a.indexOf(v) === i);

    useEffect(() => {
        axios.get(`${url}/api/drone/`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response.data.data);
                const availableDrones = response.data.data.filter(function(drone) {
                    return drone.status === "available"
                })

                setDrones(availableDrones);
            })
            .catch(function (error) {
                console.log(error);
                alert("error")
            });

        axios.get(`${url}/api/farmer/`, {
                "Content-Type": "application/json",
            })
                .then(function (response) {
                    console.log(response.data.data);
    
                    setFarmers(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                    alert("error")
                });
    }, [])

    const onFilter = () => {
        const availableDrones = drones.filter(function(drone) {
            if (curService && zipcode) 
                return drone.service === curService && drone.zipcode == zipcode;
            if (curService)
                return drone.service === curService
            if (zipcode)
                return drone.zipcode == zipcode
            // if (farmer)
            //     return drone.zipcode == zipcode
        })

        setDrones(availableDrones)
    }

    console.log('zipcode', zipcode)

    const selectDrone = (droneid) => {
        console.log('droneid', droneid)

        const curDrone = drones.filter(function(drone) {
            return drone._id === droneid
        })

        axios.put(`${url}/api/drone/edit/${droneid}`,{
            model: curDrone.model,
            service: curDrone.service,
            country: curDrone.country,
            zipcode: curDrone.zipcode,
            status: "deployed",
            farmerId: curDrone.farmerId,
            pilotId: id,
            farmId: curDrone.farmId,
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                alert('Drone booked. Click OK to generate bill')
                window.location = `/dashboard/pilot/scheduleThree/${droneid}`
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getFarmerName = (farmerid) => {
        const getfarmer = farmers && farmers.filter(function(farmer) {
            return farmer._id === farmerid
        })

        return getfarmer && getfarmer[0].name
    }

    console.log('drones', drones, services, curService, zipcode)

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div className={styles['sidebar']}>
                    <div className={styles['title']}>
                        Dashboard
                    </div>
                    <div className={styles['options']}>
                        <div className={styles['option']}>
                            Maintenance
                        </div>
                        <div className={styles['option-select']}>
                            Book Drone Service
                        </div>
                        <div className={styles['option']}>
                            My Bookings
                        </div>
                        <div className={styles['option']}>
                            Service Reports
                        </div>
                        <div className={styles['option']}>
                            Profile
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <Stepper 
                            steps={[{}, {}]}
                            activeStep={1}
                        />
                        <div className={styles['header']}>
                            Step 1: Drone Catalog
                        </div>
                        <div className={styles['sub-header']}>
                            Select a service and choose your drone
                        </div>
                    </div>

                    <div className={styles['bar']}>

                        <select onChange={(e) => setCurService(e.target.value)} name="cars" id="cars" className={styles['item']}>
                            <option value="Select Service">Select Service</option>
                            {
                                services && services.map((service, index) => {
                                    return (
                                        <option value={service}>{service}</option>
                                    )
                                })
                            }
                            
                        </select>

                        <select onChange={(e) => setFarmer(e.target.value)} name="cars" id="cars" className={styles['item']}>
                            <option value="Select Farmer">Select Farmer</option>
                            {
                                farmers && farmers.map((farmer, index) => {
                                    return (
                                        <option value={farmer._id}>{farmer.name}</option>
                                    )
                                })
                            }
                            
                        </select>

                        <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Filter by zipcode" />

                        <button style={{padding: "0px 16px", cursor: "pointer"}} onClick={onFilter}>Filter</button>

                    </div>

                    <br/><br/>

                    {drones && drones.length} Drone Found

                    {
                        drones &&
                        <div className={styles['show-farms']}>
                        {
                            drones.map((drone, index) => {
                                return (
                                    <div className={styles['show-farm']} key={drone._id}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src="https://i.picsum.photos/id/676/536/354.jpg?hmac=AUe7ybcPXLBm37YhZd49jpbOql4HORAAWX-WUPSOhjg" />
                                        <Card.Body>
                                            <Card.Title>{drone.model}</Card.Title>
                                            <Card.Text>{drone.service}</Card.Text>
                                            <Card.Text>{drone.country}</Card.Text>
                                            <Card.Text>{drone.zipcode}</Card.Text>
                                            <Card.Text>Farmer: {getFarmerName(drone.farmerId)}</Card.Text>
                                            <Button variant="primary" style={{ fontSize: "16px" }} onClick={() => selectDrone(drone._id)}>Select</Button>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    }

                    <br/><br/>

                    {/* <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                        <button className={styles['blue']}>Save</button>
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default ScheduleOne;