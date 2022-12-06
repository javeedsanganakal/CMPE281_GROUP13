import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import axios from 'axios';
import { url } from '../../utils/constants';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();

function Three()  {

    console.log(cookies.get('farm'))

    const [name, setName] = useState('');
    const [licenseid, setLicenseid] = useState('');

    const onSubmit = () => {
        let oneObj = cookies.get('farm');

        let driverlicense = {
            name,
            licenseid
        }

        oneObj.driverlicense = driverlicense;

        cookies.set('farm', oneObj);
        console.log('farm', cookies.get('farm')); // Pacman

        axios.post(`${url}/api/farm/create`, {
            name: oneObj.name,
            address: oneObj.address,
            city: oneObj.city,
            country : oneObj.country,
            zipcode : oneObj.zipcode,
            area: oneObj.area,
            dateofissue: oneObj.dateofissue,
            utilitybill: oneObj.utilitybill,
            driverlicense: oneObj.driverlicense
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                alert(response.data.message);
            })
            .catch(function (error) {
                console.log(error);
                alert("error")
            });
    }

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}]}
                    activeStep={2}
                />
                <div className={styles['form-title']}>
                    Farm Verification: Identity
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Driver's License
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" value={licenseid} onChange={(e) => setLicenseid(e.target.value)} placeholder="License ID" />
                        </div>
                    </div>
                    
                </div>

                {/* <Upload text={'Upload pdf/image of license'} /> */}

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['blue']} style={{cursor: "pointer"}} onClick={onSubmit}>Next</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Three;