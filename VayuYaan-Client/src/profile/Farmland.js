import Navbar from '../common/navbar/Navbar';
import styles from './profile.module.scss';

function Farmland()  {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div>
                <div className={styles['form-title']}>
                    Farmland
                </div>

                <div className={styles['form-body']}>
                    <div className={styles['form-title']}>
                        West Plot A
                    </div>
                    <div className={styles['input-check']}>
                        <img src="https://i.picsum.photos/id/676/536/354.jpg?hmac=AUe7ybcPXLBm37YhZd49jpbOql4HORAAWX-WUPSOhjg" />
                        <div className={styles['plot-type']}>Plot Type</div>
                        <input type="checkbox" id="Livestock" name="Livestock" />
                        <label for="Livestock">Livestock</label>

                        <input type="checkbox" id="Crops" name="Crops" />
                        <label for="Crops">Crops</label>

                        <input type="checkbox" id="Fruits" name="Fruits" />
                        <label for="Fruits">Fruits</label>

                        <input type="checkbox" id="Nursery" name="Nursery" />
                        <label for="Nursery">Nursery</label>

                    </div>
                    <div className={styles['input-field']}>
                        <input type="text" placeholder="Type (in detail)" />
                    </div>
                </div>

                <div className={styles['navigate']}>
                    <div className={styles['navigate-btn']}>
                        <button className={styles['blue']}>Save</button>
                    </div>
                    <div className={styles['navigate-btn']}>
                        <div>
                            <button className={styles['blue']}>West Plot A</button>
                        </div>
                        <div>
                            <button className={styles['blue']}>North Plot B</button>
                        </div>
                        <div>
                            <button className={styles['blue']}>South Plot C</button>
                        </div>
                        <div>
                            <button className={styles['blue']}>East Plot D</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Farmland;