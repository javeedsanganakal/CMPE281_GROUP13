import React from "react";
import Layout from "../../../../components/layouts";
import styles from "./CreateDronePage.module.scss";
import DroneImage from "../../../../Assets/drone-image.svg"
import { Link } from "react-router-dom";

function CreateDronePage() {
  return (
    <Layout>
    <div>
      <div className={styles.createDroneContainer}>
        <div className={styles.createDroneHeader}>Simulation ID# 12345</div>
        <div className={styles.likeToCreateDronoe}>
          Your simulated drone has been created! It will automatically be
          destroyed when you logout.
        </div>
        <div className={styles.createDroneWrapper}>
          <div className={styles.droneInformation}>Drone Information</div>
          <div className={styles.droneInformationSec}>
            <div className={styles.droneInformationContainer}>
              <div className={styles.droneCollectionInfo}>
                <div className={styles.collectionSec}>DJI Mini SE</div>
                <div className={styles.collectionSec}>Data Collection</div>
                <p>ID #1</p>
                <p>Simulation ID # 12345</p>
                <p>Plan ID #0</p>
                <p>DJI Mini SE</p>
                <p>Server ID #0</p>
                <p>Status: Running</p>
              </div>
              <div>
                <img src={DroneImage} />
              </div>
            </div>
            <div className={styles.destroyBtn}>Destroy</div>
          </div>
        </div>
        <Link to="/">
          <div className={styles.backBtn}>Back</div>
        </Link>
      </div>
    </div>
    </Layout>
  );
}

export default CreateDronePage;
