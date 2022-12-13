import Navbar from '../../common/navbar/Navbar';
import styles from '../../profile/profile.module.scss';

function PilotDashboard()  {

    return (
        <>
            <Navbar />
            <div className={styles['container-fluid']}>
                <div>

                <div className={styles['row']}>
                    <div className={styles['farmer-profile']}>
                        
                        <div className={styles['btn-section']}>
                            <div className={styles['navigate-btn']}>
                                <button className={styles['blue']}>Edit Schedule</button>
                            </div>
                            <div className={styles['navigate-btn']}>
                                <button className={styles['blue']}>View Bookings</button>
                            </div>
                            <div className={styles['navigate-btn']}>
                                <button className={styles['blue']}>Edit Profile</button>
                            </div>
                        </div>

                    </div>

                    <div className={styles['farmer-profile']}>
                        <div className={styles['details']}>
                            <img src='https://picsum.photos/150' />
                            <div className={styles['name-section']}>
                                Welcome John
                            </div>

                        </div>
                    </div>
                    
                    

                </div>

                </div>
                
            </div>
        </>
    )
}

export default PilotDashboard;