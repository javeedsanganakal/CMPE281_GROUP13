import React from "react";
import styles from "./Could.module.scss";
import SearchIcon from "../../Assets/searchIcon.svg";
import DroneImaage from "../../Assets/drone-image.svg";
import Layout from "../../components/layouts";

import Map from "./Map";

const flag = [
  {
    color: "#00AC4F",
    title: "Active",
  },
  {
    color: "#FF0000",
    title: "Stopped",
  },
  {
    color: "#FBBC05",
    title: "Connected, ready to do service",
  },
  {
    color: "#5932EA",
    title: "Registered, not connected",
  },
];

const droneCards = [
  {
    id: "Drone ID #",
    number: 4,
    metrial: "DJI Phantom",
    image: DroneImaage,
    status: "Connected",
  },
  {
    id: "Drone ID #",
    number: 5,
    metrial: "DJI Phantom",
    image: DroneImaage,
    status: "Connected",
  },
  {
    id: "Drone ID #",
    number: 6,
    metrial: "DJI Phantom",
    image: DroneImaage,
    status: "Connected",
  },
];

const CouldDashboardMap = () => {
  return (
    <>
      <div>
        <Layout>
          <div className={styles.couldDroneMap}>
            <div className={styles.homepageHeader}>Drone Could Dashboard</div>
            <div className={styles.droneDetailSection}>
              <div className={styles.simulatedDrone}>
                <div className={styles.simulatedDroneSec}>
                  Drone Cloud Dashboard
                </div>
                <div className={styles.simulatedDroneSec}>Simulated Drones</div>
                <div className={styles.simulatedDroneSec}>
                  Drone Services Map
                </div>
              </div>
            </div>
            <div className={styles.droneMap}>Drone Cloud Map</div>
            <div className={styles.search}>
              <div className={styles.searchByCity}>Search Drones by City</div>
              <div className={styles.searchInput}>
                <img
                  src={SearchIcon}
                  alt="search"
                  className={styles.searchIcon}
                />
                <input
                  className={styles.searchBar}
                  placeholder="Mariposa, CA 94500"
                />
              </div>
            </div>
            <div className={styles.status}>Drones Status</div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.statusWithFlag}>
                  {flag.map(({ color, title }) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            background: color,
                            height: "10px",
                            width: "10px",
                            borderRadius: "50%",
                          }}
                        ></div>
                        <div>{title}</div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ width: "550px" }}>
                  <Map />
                </div>
              </div>
              <div>
                <div className={styles.drones}>Stationed Drones</div>
                <div className={styles.drones}>3 Drones Found</div>
                <div className={styles.cards}>
                  {droneCards.map(({ id, number, metrial, image, status }) => {
                    return (
                      <div className={styles.card}>
                        <div className={styles.leftPart}>
                          <div className={styles.id}>{id}</div>
                          <div className={styles.number}>{number}</div>
                          <div className={styles.metrial}>{metrial}</div>
                        </div>
                        <div>
                          <img src={image} alt="drone-image" />
                        </div>
                        <button>{status}</button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default CouldDashboardMap;
