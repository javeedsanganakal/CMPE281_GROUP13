import Navbar from '../common/navbar/Navbar';
import styles from './profile.module.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../utils/constants';

import Button from 'react-bootstrap/Button';

function Farm()  {


    const [farm, setFarm] = useState();

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
                setFarm(response.data.data[0].farm);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log(farm)

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>
                <div className={styles['form-title']}>
                    Farmer's Farm Profile
                </div>

                {
                    farm &&
                    <div className={styles['form-body']}>
                    <div className={styles['input-field']}>
                        Name &nbsp;<input type="text" value={farm.name} placeholder="Name" />
                    </div>
                    <div className={styles['input-field']}>
                        Address &nbsp;<input type="text" value={farm.address} placeholder="Address" />
                    </div>
                    <div className={styles['input-field']}>
                        City &nbsp;<input type="text" value={farm.city} placeholder="City" />
                    </div>


                    <div className={styles['input-field']}>
                        Country &nbsp;<input type="text" value={farm.country} placeholder="Country" />
                    </div>
                    <div className={styles['input-field']}>
                        Zipcode &nbsp;<input type="text" value={farm.zipcode} placeholder="Zip Code" />
                    </div>
                </div>
                }

                {/* <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['blue']}>Save</button>
                    </div>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['blue']}>Farmland</button>
                    </div>
                </div> */}
                </div>
                
            </div>
        </>
    )
}

export default Farm;