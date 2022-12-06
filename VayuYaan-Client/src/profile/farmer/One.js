import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();

function One()  {

    let oneObj = {};

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');

    const onSubmit = () => {

        cookies.set('farmer', {});
        
        oneObj.name = name;
        oneObj.phone = phone;
        oneObj.email = email;
        oneObj.birthday = birthday;
        oneObj.gender = gender;

        cookies.set('farmer', oneObj);
        console.log('farmer', cookies.get('farmer')); // Pacman

        window.location="/profile/farmer/2";
    }

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}, {}, {}, {}, {}]}
                    activeStep={0}
                />
                <div className={styles['form-title']}>
                    Farmer Information
                </div>
                <div className={styles['form-subtitle']}>
                    Fill in the data for your profile. It will only take a couple of minutes.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['input-field']}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
                    </div>
                </div>

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

export default One;