import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies = new Cookies();

function Two()  {

    const [agreementId, setAgreementId] = useState('');
    const [dateofsettlement, setDateofsettlement] = useState('');

    const onSubmit = () => {
        let oneObj = cookies.get('farm');

        let utilitybill = {
            agreementId,
            dateofsettlement
        }

        oneObj.utilitybill = utilitybill;

        cookies.set('farm', oneObj);
        console.log('farm', cookies.get('farm')); // Pacman

        window.location="/profile/farm/3"
    }

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <Stepper 
                    steps={[{}, {}, {}]}
                    activeStep={1}
                />
                <div className={styles['form-title']}>
                    Farm Operation
                </div>
                <div className={styles['form-subtitle']}>
                    Your farm’s utliliy bill. This can be an electric bill, or alternatively a water bill.
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        Farm Utility Bill
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" value={agreementId} onChange={(e) => setAgreementId(e.target.value)} placeholder="Statement Agreement ID" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" value={dateofsettlement} onChange={(e) => setDateofsettlement(e.target.value)} placeholder="Date of bill statement" />
                        </div>
                    </div>
                </div>

                

                {/* <Upload text="Upload pdf/image of utility bill" /> */}

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