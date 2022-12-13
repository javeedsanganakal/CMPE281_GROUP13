import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts";
import styles from "./drone.module.scss";
import SearchIcon from "../../Assets/searchIcon.svg";
import DroneImaage from "../../Assets/drone-image.svg";
import MapD from "../CouldDashboardMap/Map";
import Map from "../../profile/farm/map/Map";
import { useNavigate, redirect } from "react-router-dom";

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
  const droneCards = [
    {
      _id: 45534,
      id: "Drone ID #1",
      number: 4,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
      currentLocation: { lng: -121.85753289484508, lat: 37.341505675646594 },
      droneTracking: [{ lat: 37.32597322686474, lng: -121.90499804392056 }, { lat: 37.31931149192631, lng: -121.88577196708246 }, { lat: 37.32597322686474, lng: -121.90499804392056 }, { lat: 37.31931149192631, lng: -121.88577196708246 }]
    },
    {
      _id: 45698,
      id: "Drone ID #2",
      number: 5,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
      currentLocation: { lng: -121.85753289484508, lat: 37.32362510248663 },
      droneTracking: [{ lat: 37.3319485736073, lng: -121.92867279052734 }, { lat: 37.348547540923164, lng: -121.9088070055997 }, { lat: 37.3319485736073, lng: -121.92867279052734 }, { lat: 37.348547540923164, lng: -121.9088070055997 }]
    },
    {
      _id: 54909,
      id: "Drone ID #3",
      number: 6,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
      currentLocation: { lng: -121.80972520136363, lat: 37.33679708256735 },
      droneTracking: [{ lat: 37.32020916852676, lng: -121.89545631408691 }, { lat: 37.329020380034876, lng: -121.90494842090712 }, { lat: 37.32020916852676, lng: -121.89545631408691 }, { lat: 37.329020380034876, lng: -121.90494842090712 }]
    },
  ];
  let drone_id = new URLSearchParams(window.location.search).get('id')
  console.log(drone_id)
  const [droneData, setDroneData] = useState({
    _id: "",
    id: "",
    number: "",
    metrial: "",
    image: "",
    status: "",
    currentLocation: "",
    droneTracking: "",
  })
  const navigate = useNavigate();
  useEffect(() => {
    for (let i = 0; i < droneCards.length; i++) {
      if (droneCards[i]._id === drone_id || droneCards[i]._id === Number(drone_id)) {
        setDroneData(droneCards[i])
      } else if (drone_id === null || drone_id === "") {
        navigate("/dashboard/drone/cloud/map")
        console.log("No drone Id found")
      }
    }
  }, [drone_id])
  {
    if (drone_id === null || drone_id === "") {
      return
    }
  }
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
            <div className={styles.droneMap}>{droneData.id}</div>
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
                    <div>{droneData.id}</div>
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
                    pointerCoordinates={droneData.droneTracking}
                    isDisabled={true}
                    draggable={false}
                    // icon={DroneImaage}
                    isConnected={true}
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
