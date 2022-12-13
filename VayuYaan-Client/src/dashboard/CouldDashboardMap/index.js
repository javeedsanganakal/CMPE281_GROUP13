import React, { useEffect, useState } from "react";
import styles from "./Could.module.scss";
import SearchIcon from "../../Assets/searchIcon.svg";
import DroneImaage from "../../Assets/drone-image.svg";
import Layout from "../../components/layouts";

import Map from "../../profile/farm/map/Map";
import { Link, useNavigate } from "react-router-dom";

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
    _id: 45534,
    id: "Drone ID #1",
    number: 4,
    metrial: "DJI Phantom",
    image: DroneImaage,
    status: "Connected",
    currentLocation: { lng: -121.85753289484508, lat: 37.341505675646594 },
  },
  {
    _id: 45698,
    id: "Drone ID #2",
    number: 5,
    metrial: "DJI Phantom",
    image: DroneImaage,
    status: "Connected",
    currentLocation: { lng: -121.85753289484508, lat: 37.32362510248663 },
  },
  {
    _id: 54909,
    id: "Drone ID #3",
    number: 6,
    metrial: "DJI Phantom",
    image: DroneImaage,
    status: "Connected",
    currentLocation: { lng: -121.80972520136363, lat: 37.33679708256735 },
  },
];

const CouldDashboardMap = () => {
  const [droneCurrentLocations, setDroneCurrentLocations] = useState()
  const [markerTitle, setMarkerTitle] = useState()
  const navigate = useNavigate();
  useEffect(()=>{
    if (droneCards.length > 0) {
      let locations = []
      let titles = []
      droneCards.map((drone) => {
        locations.push(drone.currentLocation)
        titles.push(drone.id)
      })
      if (locations.length > 0) {
        setDroneCurrentLocations(locations)
      }
      if (titles.length > 0) {
        console.log(titles)
        setMarkerTitle(titles)
      }
    } else {
      console.log("No drones dound")
    }
  }, [droneCards])
  
  return (
    <>
      <div>
        <Layout>
          <div className={styles.couldDroneMap}>
            <div className={styles.homepageHeader}>Drone Could Dashboard</div>
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
                  <Map markerTitle={markerTitle} draggable={false} icon={DroneImaage} isDisabled={true}  pointerCoordinates={droneCurrentLocations}/>
                </div>
              </div>
              <div>
                <div className={styles.drones}>Stationed Drones</div>
                <div className={styles.drones}>3 Drones Found</div>
                <div className={styles.cards}>
                  {droneCards.map(({ id, number, metrial, image, status, _id }) => {
                    return (
                      <div className={styles.card}>
                        <div className={styles.leftPart}>
                          <div className={styles.id}>{id}</div>
                          <div className={styles.number}>{number}</div>
                          <div className={styles.metrial}>{metrial}</div>
                          <div className={styles.links}>
                            <Link className={styles.links} to={`/dashboard/drone/catalog/?id=${_id}`}>Mission Planner</Link><br/>
                            <Link className={styles.links} to={`/dashboard/drone/cloud/tracking/?id=${_id}`}>Drone tracking</Link>
                          </div>
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
