import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts";

import styles from "./catalog.module.scss";
// import Map from "../CouldDashboardMap/Map";
import Map from "../../profile/farm/map/Map";


const DroneCatalog = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!user || user.role === 'admin') {
      setFlag(true);
    }
  }, [])

  const body = () => {
    return (
      <div className={styles.couldDroneMap}>
            <div className={styles.homepageHeader}>Drone Booking</div>
            <div className={styles.droneDetailSection}>
              <div className={styles.simulatedDrone}>
                <div className={styles.simulatedDroneSec}>
                  {flag ? <>All Drone Tracking</> : <>Booking Schedules</>}
                </div>
                <div className={styles.simulatedDroneSec} onClick={() => {
                  if (flag) {
                    window.location = "/dashboard/drone/cloud/map";
                  }
                }}>{flag ? <>Particular Drone Tracking</> : <>Mission Planner</>}</div>
                <div className={styles.simulatedDroneSec} onClick={() => {
              if (flag) {
                window.location = "/dashboard/drone/cloud/tracking";
              }
            }}>{flag ? <>Mission Planner</> : <>Pilot Management</>}</div>
              </div>
            </div>
            <div className={styles.droneMap}>{flag ? <>All Drone Tracking</> : <>Mission Planner</>}</div>
            <div className={styles.droneMap}>Drone ID #1</div>
            <div style={{ display: "flex", gap: "200px" }}>
              <div className={styles.leftPartDetail}>
                <div style={{ color: "#1A3447", fontWeight: "700" }}>
                  Service Details
                </div>
                <div>ID# 1144</div>
                <div>Mission Plan ID#: 200</div>
                <div>Status: Active</div>
                <div className={styles.details}>
                  Service Type: Rental - Data Collection
                </div>
                <div>Time Start: 06/29/2022 10:00 am</div>
                <div>Time End: 06/29/2022, 5:00 pm</div>
                <div>Land: West Plot A - Crop</div>
                <div>Drone ID #1: DJI Mini SE</div>
              </div>

              <div className={styles.rightPartDetails}>
                <div style={{ color: "#1A3447", fontWeight: "700" }}>
                  Drone Profile Details
                </div>
                <div>ID #1</div>
                <div>Model: DJI Mini SE</div>
              </div>
            </div>
            <div className={styles.open}>
              <div className={styles.part}>
                <div className={styles.mission}>Mission Plan</div>
                <div style={{ margin: "0 0 0 20px" }}>ID # 123</div>
              </div>
              <div className={styles.buttons}>
                <button>Open</button>
                <button>Save</button>
              </div>
            </div>

            <div style={{ margin: "10px 0  0 20px", width: "70vw" }}>
              {/* <Map /> */}
              <Map Lines= {false}
                pointerCoordinates={[{
                  "lat": 54.4764587956108,
                  "lng": -7.75824062499999
                },
                {
                  "lat": 51.67940757138137,
                  "lng": -3.1000374999999902
                },
                {
                  "lat": 54.52749466436205,
                  "lng": 2.8765250000000098
                },
                {
                  "lat": 37.341505675646594,
                  "lng": -121.8461174132777
                },
                {
                  "lat": 37.32362510248663,
                  "lng": -121.85753289484508
                },
                {
                  "lat": 37.33679708256735,
                  "lng": -121.80972520136363
                },
                {
                  "lat": 37.29907014387675,
                  "lng": -121.85985032343395
                },
                {
                  "lat": 51.73387233546496,
                  "lng": 7.62261875000001
                },
                {
                  "lat": 48.98746903250036,
                  "lng": 2.2612906250000098
                },
                {
                  "lat": 45.65249305327456,
                  "lng": 6.65582187500001
                }]}


                isDisable={true} />
            </div>
            <div style={{ display: "flex", gap: "400px" }}>
              <div className={styles.back}>Back</div>
              <div className={styles.confirm}>Confirm</div>
            </div>
          </div>
    )
  }
    

  return (
    <>
      <div>
        {/* {
          flag &&
          <>
            {body()}</>
        }

        {
          !flag &&
            <Layout>
              
            {body()}
            </Layout>
        } */}

<Layout>
              
              {body()}
              </Layout>
        
      </div>
    </>
  );
};

export default DroneCatalog;
