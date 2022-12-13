import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';

function One()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>

                <div className={styles['form-title']}>
                    Create Drone
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Drone Model" />
                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Service" />
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Country" />
                        </div>
                        <div className={styles['input-field']}>
                            <input type="text" placeholder="Zip Code" />
                        </div>
                    </div>

                    <div className={styles['row']}>
                        <div className={styles['input-field']}>
                            <select name="Select Farmer" id="Select Farmer" className={styles['item']}>
                                <option value="Select Farmer">Select Farmer</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div className={styles['input-field']}>
                            <select name="Select Pilot" id="Select Pilot" className={styles['item']}>
                                <option value="Select Pilot">Select Pilot</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>

                    
                </div>

                

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                    </div>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['blue']}>Confirm</button>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default One;