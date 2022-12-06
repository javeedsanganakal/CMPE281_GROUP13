import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();

function Two()  {

    const [idnumber, setIdnumber] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const onSubmit = () => {
        let oneObj = cookies.get('pilot');

        let certificate = {
            idnumber,
            name,
            address,
            city,
            country,
            zipcode,
            gender,
            height,
            weight
        }

        oneObj.certificate = certificate;

        cookies.set('pilot', oneObj);
        console.log('pilot', cookies.get('pilot')); // Pacman

        window.location="/profile/pilot/3"
    }

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}]}
                    activeStep={1}
                />
                <div className={styles['form-title']}>
                    Let's verify your pilot certification.
                </div>
                <div className={styles['form-subtitle']}>
                    Fill in more data regarding your pilot certification.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Remote Pilot Certificate
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" value={idnumber} onChange={(e) => setIdnumber(e.target.value)} placeholder="Certificate ID number" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name of Certificate Holder" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="Zip Code" />
                        </div>
                    </div>

                    <div className={styles['input-field']}>
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                    </div>

                    <div className={styles['row']}>
                        
                        <div className={styles['input-field']}>
                            <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
                        </div>
                    </div>
                    
                </div>

                {/* <Upload text={'Upload pdf/image of certificate'} /> */}

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

export default Two;