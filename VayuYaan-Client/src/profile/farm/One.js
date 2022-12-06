import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();


function One()  {

    let oneObj = {};

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [area, setArea] = useState('');
    const [dateofissue, setDateofissue] = useState('');

    const onSubmit = () => {

        cookies.set('farm', {});
        
        oneObj.name = name;
        oneObj.address = address;
        oneObj.city = city;
        oneObj.country = country;
        oneObj.zipcode = zipcode;
        oneObj.area = area;
        oneObj.dateofissue = dateofissue;

        cookies.set('farm', oneObj);
        console.log('farm', cookies.get('farm')); // Pacman

        window.location="/profile/farm/2";
    }

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}]}
                    activeStep={0}
                />
                <div className={styles['form-title']}>
                    Farm Verification: Land Ownership
                </div>
                <div className={styles['form-subtitle']}>
                    Land Ownership Certificate
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['input-field']}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name of Land Owner" />
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

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Total area (square feet)" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" value={dateofissue} onChange={(e) => setDateofissue(e.target.value)} placeholder="Date of certificate issue" />
                        </div>
                    </div>
                </div>

                

                {/* <Upload text="Upload pdf/image of certificate" /> */}

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

export default One;