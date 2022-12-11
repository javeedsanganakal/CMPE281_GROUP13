import React from "react";
import Layout from "../../components/layouts";
import styles from "./drone.module.scss";
import SearchIcon from "../../Assets/searchIcon.svg";
import DroneImaage from "../../Assets/drone-image.svg";
import MapD from "../CouldDashboardMap/Map";
import Map from "../../profile/farm/map/Map";
import { useNavigate } from "react-router-dom";

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

const DroneCloudTracking = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Layout>
          <div className={styles.couldDroneMap}>
            <div className={styles.homepageHeader}>Selected Drone Tracking</div>
            <div className={styles.droneDetailSection}>
              <div className={styles.simulatedDrone}>
                <div
                  className={styles.simulatedDroneSec}
                  onClick={() => navigate("/dashboard/drone/cloud/map")}
                >
                  Drone Cloud Map
                </div>
                <div
                  className={styles.simulatedDroneSec}
                  onClick={() => navigate("/dashboard/drone/cloud/tracking")}
                >
                  Drone Cloud Tracking
                </div>
                <div
                  className={styles.simulatedDroneSec}
                  onClick={() => navigate("/dashboard/drone/catalog")}
                >
                  Drone Catalog
                </div>
              </div>
            </div>
            <div className={styles.droneMap}>Drone ID #4</div>
            <div style={{ display: "flex", gap: "200px" }}>
              <div className={styles.leftPartDetail}>
                <div style={{ color: "#1A3447", fontWeight: "700" }}>
                  Tracking Details
                </div>
                <div>Status: Active</div>
                <div className={styles.details}>
                  Total distance traveled: 120 meters
                </div>
                <div>Total time traveled: 10 minutes</div>
                <div className={styles.details}>
                  Location (Latitude, Longitude, Altitude):
                </div>
                <div>(37.558381,-122.048111, 100)</div>
                <div className={styles.details}>Speed: 10 m/s</div>
                <div className={styles.details}>
                  Distance to destination: 10 meters
                </div>
                <div>Estimated time to destination: 10:45 am</div>
              </div>
              <div className={styles.rightPartDetails}>
                <div style={{ display: "flex" }}>
                  <div>
                    <div style={{ color: "#1A3447", fontWeight: "700" }}>
                      Drone
                    </div>
                    <div>Drone ID #4</div>
                    <div>Drone model: DJI Phantom Pro</div>
                  </div>
                  <img src={DroneImaage} alt="DroneImaage" />
                </div>
                <div
                  style={{ color: "#1A3447", fontWeight: "700" }}
                  className={styles.details}
                >
                  TService Details
                </div>
                <div>Assigned Service ID #: 1000</div>
                <div>Service Type: Surveillance</div>
                <div>Farm: 3671 Old Toll Road, Mariposa, CA 95338</div>
                <div>Land: East Plot D - Livestock</div>
                <div>Farmer: Andy Palmer</div>
                <div>Service Time: Full Day, 10:00 AM</div>
                <div>Mission Plan ID #1</div>
                <div>Flight ID #1</div>
              </div>
            </div>
            <div className={styles.search}>
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{
                    background: "#5932EA",
                    height: "19px",
                    width: "14px",
                    borderRadius: "65%",
                  }}
                ></div>
                Actual path
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  style={{
                    background: "#007AFF",
                    height: "19px",
                    width: "14px",
                    borderRadius: "65%",
                  }}
                ></div>{" "}
                Mission plan
              </div>
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
                <div style={{ margin: "10px 0  0 20px", width: "70vw" }}>
                  {/* <MapD /> */}
                  <Map
                    lineCoordinates={[
                      {
                        lat: 54.4764587956108,
                        lng: -7.75824062499999,
                      },
                      {
                        lat: 51.67940757138137,
                        lng: -3.1000374999999902,
                      },
                      {
                        lat: 54.52749466436205,
                        lng: 2.8765250000000098,
                      },
                      {
                        lat: 51.73387233546496,
                        lng: 7.62261875000001,
                      },
                      {
                        lat: 48.98746903250036,
                        lng: 2.2612906250000098,
                      },
                      {
                        lat: 45.65249305327456,
                        lng: 6.65582187500001,
                      },
                    ]}
                    pointerCoordinates={[
                      {
                        lat: 54.4764587956108,
                        lng: -7.75824062499999,
                      },
                      {
                        lat: 51.67940757138137,
                        lng: -3.1000374999999902,
                      },
                      {
                        lat: 54.52749466436205,
                        lng: 2.8765250000000098,
                      },
                      {
                        lat: 51.73387233546496,
                        lng: 7.62261875000001,
                      },
                      {
                        lat: 48.98746903250036,
                        lng: 2.2612906250000098,
                      },
                      {
                        lat: 45.65249305327456,
                        lng: 6.65582187500001,
                      },
                    ]}
                    isDisable
                  />
                </div>
              </div>
            </div>
            <div className={styles.back}>Back</div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default DroneCloudTracking;
