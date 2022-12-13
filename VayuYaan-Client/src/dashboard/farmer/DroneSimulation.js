import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';

function DroneSimulation()   {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                <div className={styles['sidebar']}>
                    <div className={styles['title']}>
                        Dashboard
                    </div>
                    <div className={styles['options']} style={{cursor: "pointer"}}>
                        <div className={styles['option']} onClick={() => window.location='/dashboard/farmer/maintenance'}>
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
                        <div className={styles['option-select']} onClick={() => window.location='/dashboard/farmer/dronesimulation'}>
                            Simulation Management
                        </div>
                    </div>
                </div>
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            Drone Simulation Management
                        </div>
                        <div className={styles['sub-header']}>
                            <div className={styles['row']}>
                                {/* <buton className={styles['slt-drones']}>Simulated Drones</buton> */}
                                <buton className={styles['create-slt']} onClick={() => window.location="/dashboard/farmer/dronesimulation/create"}>Create Simulation</buton>
                            </div>
                        </div>
                    </div>

                    <div className={styles['table']}>
                        <div className={styles['title']}>
                            All Simulated Drones
                        </div>
                        <div className={styles['display']}>
                            <table>
                                <tr>
                                    <th>Simulation ID#</th>
                                    <th>Drone ID#</th>
                                    <th>Drone Model</th>
                                    <th>Mission Plan ID#</th>
                                    <th>Simulation Status</th>
                                    <th>Server ID#</th>
                                </tr>
                                <tr>
                                    <td>ID# 1111</td>
                                    <td>West Plot A</td>
                                    <td>Crop</td>
                                    <td>Rental: Data Collection</td>
                                    <td>06/29/2022</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>ID# 1111</td>
                                    <td>West Plot A</td>
                                    <td>Crop</td>
                                    <td>Rental: Data Collection</td>
                                    <td>06/29/2022</td>
                                    <td>1</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DroneSimulation;