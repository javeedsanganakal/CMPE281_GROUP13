import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();

function Four()  {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [totalarea, setTotalarea] = useState('');
    const [dateofissue, setDateofissue] = useState(new Date());

    const onSubmit = () => {
        let oneObj = cookies.get('farmer');

        let certificate = {
            name,
            address,
            city,
            country,
            zipcode,
            totalarea,
            dateofissue
        }

        oneObj.farm.certificate = certificate;

        cookies.set('farmer', oneObj);
        console.log('farmer', cookies.get('farmer')); // Pacman

        window.location="/profile/farmer/5"
    }

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={3}
                />
                <div className={styles['form-title']}>
                    Let's verify your farm.
                </div>
                <div className={styles['form-subtitle']}>
                    Fill in more data regarding your farm certification.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Land Ownership Certificate
                    </div>
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
                            <input type="text" value={totalarea} onChange={(e) => setTotalarea(e.target.value)} placeholder="Total area (square feet)" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="date" value={dateofissue} onChange={(e) => setDateofissue(e.target.value)} placeholder="Date of certificate issue" />
                        </div>
                    </div>
                    
                </div>

                {/* <Upload text={'Upload pdf/image of certificate'} /> */}

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']} style={{cursor: "pointer"}}>
                        <button className={styles['blue']} onClick={onSubmit}>Next</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Four;