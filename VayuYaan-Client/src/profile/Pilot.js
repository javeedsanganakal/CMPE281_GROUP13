import { useEffect, useState } from 'react';
import Navbar from '../common/navbar/Navbar';
import styles from './profile.module.scss';

import axios from 'axios';
import { url } from '../utils/constants';

function Pilot()  {

    const [pilot, setPilot] = useState();

    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user", user)

    if (!user || user.role !== 'pilot') {
        window.location = "/adminaccess"
    }

    useEffect(() => {
        axios.get(`${url}/api/pilot/email/${user.email}`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                setPilot(response.data.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log(pilot)

    return (
        <>
            <Navbar />
            <div className={styles['container-fluid']}>
                <div>
                <div className={styles['form-title']}>
                    Profile
                </div>
                {
                    pilot &&
                    <div className={styles['row']}>
                        <div className={styles['farmer-profile']}>
                            <div className={styles['details']}>
                                <img src='https://picsum.photos/150' />
                                <div className={styles['name-section']}>
                                    {pilot.name}
                                </div>
                            </div>

                            <div className={styles['info']}>
                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Email
                                    </div>
                                    <div className={styles['col']}>
                                    {pilot.email}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Phone
                                    </div>
                                    <div className={styles['col']}>
                                    {pilot.phone}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Birthday
                                    </div>
                                    <div className={styles['col']}>
                                    {pilot.birthday}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Credit Card
                                    </div>
                                    <div className={styles['col']}>
                                    {pilot.billingInformation.cardnumber}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                    PayPal
                                    </div>
                                    <div className={styles['col']}>
                                    Not Set
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Password
                                    </div>
                                    <div className={styles['col']}>
                                        ************
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['btn-section']}>
                            <div className={styles['navigate-btn']} style={{cursor: "pointer"}}>
                                <button className={styles['blue']} onClick={() => window.location = `/dashboard/pilot/scheduleOne/`}>Schedule Flight</button>
                            </div>
                            <div className={styles['navigate-btn']} style={{cursor: "pointer"}}>
                                <button className={styles['blue']} onClick={() => window.location = `/dashboard/pilot/myBookings`}>Upcoming Rides</button>
                            </div>
                            <div className={styles['navigate-btn']} style={{cursor: "pointer"}}>
                                <button className={styles['blue']}>Edit Profile</button>
                            </div>
                            {/* <div className={styles['navigate-btn']}>
                                <button className={styles['blue']}>Farm Verification</button>
                            </div> */}
                        </div>

                    </div>
                }

                </div>
                
            </div>
        </>
    )
}

export default Pilot;