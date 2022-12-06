import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';
import { Stepper } from 'react-form-stepper';

import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../utils/constants';

import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

function ScheduleThree()   {

    const { id } = useParams()

    const [drones, setDrones] = useState();
    const [showPayment, setShowPayment] = useState(false);

    const [btn, setBtn] = useState('Pay')

    useEffect(() => {
        axios.get(`${url}/api/drone/${id}`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {

                setDrones([response.data.data]);
            })
            .catch(function (error) {
                console.log(error);
                alert("error")
            });
    }, [])

    const confirmBooking = () => {
        // alert("drone booked")
        setShowPayment(false)
        setBtn('Print')

    }

    console.log('hello', drones)

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
                            activeStep={2}
                        />
                        <div className={styles['header']}>
                            Step 2: Selected Drone
                        </div>
                        <div className={styles['sub-header']}>
                            This is your selected drone
                        </div>
                    </div>

                    {/* <div className={styles['title']}>
                        Drone Information
                    </div> */}

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
                                            <Card.Text>Farmer Id: {drone.farmerId}</Card.Text>
                                            {/* <Button variant="primary" style={{ fontSize: "16px" }} onClick={() => selectDrone(drone._id)}>Select</Button> */}
                                        </Card.Body>
                                    </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    }

                    <div>
                        Select time of flight
                        <input type="datetime-local" />
                    </div>

                    {
                        showPayment &&
                        <div className={styles['modal']}>
                            <div className={styles['modal-content']}>
                                <form>
                                    {/* <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Drone Model" />
                                    <input type="text" value={service} onChange={(e) => setService(e.target.value)} placeholder="Service" />
                                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Status" /> */}
                                    Card Number &nbsp;<input type="text" value={"123456789"} placeholder="Card Number" />
                                    Card Holder Name &nbsp;<input type="text" value={"Javeed"} placeholder="Card Holder Name" />
                                    CVV &nbsp;<input type="text" placeholder="CVV" />
                                    <button onClick={confirmBooking}>Confirm</button>
                                </form>
                            </div>

                            {/* <Form>
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
                            </Form> */}
                        </div>
                    }

                    {/* <div className={styles['title']}>
                        Date & Time
                    </div>
                    <div className={styles['subtitle']}>
                        29/06/2022
                    </div>
                    <div className={styles['subtitle']}>
                        Duration: 1 Day
                    </div>


                    <div className={styles['title']}>
                        Location
                    </div>
                    <div className={styles['subtitle']}>
                        3671 Old Toll Road, Mariposa, CA 95338 West Plot A: Crop
                    </div> */}

                    <br/><br/>

                    <div className={styles['navigate-btn']}>
                        {/* <button className={styles['grey']}>Back</button> */}
                        <button className={styles['blue']}>Print</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ScheduleThree;