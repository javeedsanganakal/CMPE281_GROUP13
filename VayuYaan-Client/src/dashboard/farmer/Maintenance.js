import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';

function Maintenance()   {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div className={styles['sidebar']}>
                    <div className={styles['title']}>
                        Dashboard
                    </div>
                    <div className={styles['options']} style={{cursor: "pointer"}}>
                        <div className={styles['option-select']} onClick={() => window.location='/dashboard/farmer/maintenance'}>
                            Maintenance
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/bookDroneServiceOne'}>
                            Book Drone Service
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/myBookings'}>
                            My Bookings
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/serviceReports'}>
                            Service Reports
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/profile/farmer'}>
                            Profile
                        </div>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/dronesimulation'}>
                            Simulation Management
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            Maintenance
                        </div>
                        <div className={styles['sub-header']}>
                        You can request maintenance service for your drones deployed on your farm.
                        </div>
                    </div>

                    <div className={styles['table']}>
                        <div className={styles['title']}>
                            All Bookings
                        </div>
                        <div className={styles['display']}>
                            <table>
                                <tr>
                                    <th>Drone ID#</th>
                                    <th>Drone Model</th>
                                    <th>Farmland</th>
                                    <th>Service ID#</th>
                                    <th>Service Time</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>ID# 1111</td>
                                    <td>West Plot A</td>
                                    <td>Crop</td>
                                    <td>Rental: Data Collection</td>
                                    <td>06/29/2022</td>
                                    <td><button>OK</button></td>
                                </tr>
                                <tr>
                                    <td>ID# 1111</td>
                                    <td>West Plot A</td>
                                    <td>Crop</td>
                                    <td>Rental: Data Collection</td>
                                    <td>06/29/2022</td>
                                    <td><button>Repair</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maintenance;