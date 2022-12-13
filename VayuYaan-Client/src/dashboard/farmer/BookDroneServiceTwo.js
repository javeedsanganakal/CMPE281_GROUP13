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

function BookDroneServiceTwo()   {

    const { id } = useParams()

    const [drones, setDrones] = useState();

    const droneImages = [
        'https://i.ytimg.com/vi/aUtDPRQ13B4/maxresdefault.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEy2vpZcfAkPeg5rnf3SL-CP96LCazT0m8gQfJIUJ1DlS8u5-3XnSnmG-uD7xvafrEmkI&usqp=CAU',
        'https://yourdronereviews.com/wp-content/uploads/2021/09/Best-Drones-For-Agriculture.jpg',
        'https://dji-official-fe.djicdn.com/dps/0042a681f6a88953425198b366794b57.jpg',
        'https://techbullion.com/wp-content/uploads/2021/11/agriculture-drone-spraying.jpg',
        'https://www.azolifesciences.com/images/Article_Images/ImageForArticle_757_1646406361936784.jpg'
    ]

    const [zipcode, setZipcode] = useState();
    const [curService, setCurService] = useState();

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
    }, [])

    const onFilter = () => {
        const availableDrones = drones.filter(function(drone) {
            if (curService && zipcode) 
                return drone.service === curService && drone.zipcode == zipcode;
            if (curService)
                return drone.service === curService
            if (zipcode)
                return drone.zipcode == zipcode
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
            status: curDrone.status,
            farmerId: '6380f72238828d4cf9985f7d',
            pilotId: curDrone.pilotId,
            farmId: id,
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                alert('Drone booked. Click OK to generate bill')
                window.location = `/dashboard/farmer/bookDroneServiceThree/${droneid}`
            })
            .catch(function (error) {
                console.log(error);
            });
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
                    <div className={styles['options']} style={{cursor: "pointer"}}>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/maintenance'}>
                            Maintenance
                        </div>
                        <div className={styles['option-select']} onClick={() => window.location='/dashboard/farmer/bookDroneServiceOne'}>
                            Book Drone Service
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/myBookings'}>
                            My Bookings
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/serviceReports'}>
                            Service Reports
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/profile/farmer'}>
                            Profile
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/dronesimulation'}>
                            Simulation Management
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <Stepper 
                            steps={[{}, {}, {}]}
                            activeStep={1}
                        />
                        <div className={styles['header']}>
                            Step 2: Drone Catalog
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
                            <option value={"Surveillance"}>Surveillance</option>
                            <option value={"DataCollection"}>DataCollection</option>
                            
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
                                        <Card.Img variant="top" src={droneImages[index % droneImages.length]} height={200} />
                                        <Card.Body>
                                            <Card.Title>{drone.model}</Card.Title>
                                            <Card.Text>{drone.service}</Card.Text>
                                            <Card.Text>{drone.country}</Card.Text>
                                            <Card.Text>{drone.zipcode}</Card.Text>
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

export default BookDroneServiceTwo;