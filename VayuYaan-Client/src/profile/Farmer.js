import { useEffect, useState } from 'react';
import Navbar from '../common/navbar/Navbar';
import styles from './profile.module.scss';

import axios from 'axios';
import { url } from '../utils/constants';

import Layout from '../components/layouts';

function Farmer()  {

    const [farmer, setFarmer] = useState();

    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user", user)

    if (!user || user.role !== 'farmer') {
        window.location = "/adminaccess"
    }

    useEffect(() => {
        axios.get(`${url}/api/farmer/email/${user.email}`, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                setFarmer(response.data.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log(farmer)

    return (
        <>
            {/* <Navbar /> */}
            <Layout>
            <div className={styles['container-fluid']}>
                <div>
                <div className={styles['form-title']}>
                    Profile
                </div>
                {
                    farmer &&
                    <div className={styles['row']}>
                        <div className={styles['farmer-profile']}>
                            <div className={styles['details']}>
                                <img src='https://i.ibb.co/FBS6FsF/Screenshot-2022-12-07-at-3-14-51-AM.png' width={150} />
                                <div className={styles['name-section']}>
                                    {farmer.name}
                                </div>
                            </div>

                            <div className={styles['info']}>
                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Email
                                    </div>
                                    <div className={styles['col']}>
                                    {farmer.email}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Phone
                                    </div>
                                    <div className={styles['col']}>
                                    {farmer.phone}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Birthday
                                    </div>
                                    <div className={styles['col']}>
                                    {farmer.birthday}
                                    </div>
                                </div>

                                <div className={styles['row']}>
                                    <div className={styles['col']}>
                                        Credit Card
                                    </div>
                                    <div className={styles['col']}>
                                    {farmer.billingInformation.cardnumber}
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
                                <button className={styles['blue']} onClick={() => window.location = "/profile/farm"}>Farm Profile</button>
                            </div>

                            <div className={styles['navigate-btn']} style={{cursor: "pointer"}}>
                                <button className={styles['blue']} onClick={() => window.location = "/dashboard/farmer/bookDroneServiceOne"}>Book a Drone</button>
                            </div>
                            {/* <div className={styles['navigate-btn']}>
                                <button className={styles['blue']}>Farm Verification</button>
                            </div> */}
                        </div>

                    </div>
                }

                </div>
                
            </div>
            </Layout>
        </>
    )
}

export default Farmer;