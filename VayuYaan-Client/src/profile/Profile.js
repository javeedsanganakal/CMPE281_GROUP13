import styles from './profile.module.scss';
import Navbar from '../common/navbar/Navbar';

function Profile()  {
    
    return (
        <div>
            <Navbar />
            <div className={styles['container']}>
                <div className={styles['details']}>
                    <div className={styles['header']}>
                        Welcome! Let's finish your registration.
                    </div>

                    <div className={styles['form']}>
                        <div className={styles['title']}>
                            Select Role to Register As
                        </div>
                        <br/><br/><br/>
                        <div className={styles['roles']}>
                            <div className={styles['role']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/farmer/1"}>
                                <img src="https://i.ibb.co/FBS6FsF/Screenshot-2022-12-07-at-3-14-51-AM.png" width={200} />
                                <div className={styles['role-label']}>
                                    Farmer
                                </div>
                            </div>
                            <div className={styles['role']}>
                                or
                            </div>
                            <div className={styles['role']} style={{cursor: "pointer"}} onClick={() => window.location="/profile/pilot/1"}>
                                <img src="https://img.freepik.com/free-photo/professional-drone-pilot-stock-photographer_346278-263.jpg?w=2000" width={200} height={200} />
                                <div className={styles['role-label']}>Pilot</div>
                            </div>
                        </div>

                        <div className={styles['next-step']}>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
