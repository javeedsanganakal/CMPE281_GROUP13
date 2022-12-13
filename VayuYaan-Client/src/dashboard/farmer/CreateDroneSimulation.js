import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';
import Layout from '../../components/layouts';

function CreateDroneSimulation()   {

    return (
        <>
            <Layout>
            <div className={styles['container']}>
            
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            Create a Simulated Drone
                        </div>
                        <div className={styles['sub-header']}>
                            Would you like to create a Simulated Drone?
                        </div>
                    </div>

                    <div className={styles['table']}>
                        <div className={styles['title']}>
                            Drone Information
                        </div>
                        <div className={styles['form-body']}>
                            <div className={styles['input-field']}>
                                <input type="text" placeholder="Drone ID#" />
                            </div>
                            <div className={styles['input-field']}>
                                <input type="text" placeholder="Drone Model" />
                            </div>
                            <div className={styles['input-field']}>
                                <input type="text" placeholder="Mission Plan ID#(required)" />
                            </div>

                            <button className={styles['slt-drones']}>Assign Plan</button>

                        </div>
                    </div>

                    <div className={styles['navigate-btn']}>
                        <button className={styles['grey']}>Back</button>
                        <button className={styles['blue']} onClick={() => (window.location = "/dashboard/farmer/dronesimulation")}>Create</button>
                    </div>

                </div>
            </div>
            </Layout>
        </>
    )
}

export default CreateDroneSimulation;