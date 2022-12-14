import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts";
import DroneImaage from "../../Assets/drone-image.svg";
import styles from "./catalog.module.scss";
// import Map from "../CouldDashboardMap/Map";
import Map from "../../profile/farm/map/Map";
import { Navigate, useNavigate } from "react-router-dom";

const DroneCatalog = () => {
  const droneCards = [
    {
      _id: 45534,
      id: "Drone ID #1",
      number: 4,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
      currentLocation: { lng: -121.85753289484508, lat: 37.341505675646594 },
      droneTracking: [{ lat: 37.32597322686474, lng: -121.90499804392056 }, { lat: 37.31931149192631, lng: -121.88577196708246 }, { lat: 37.32597322686474, lng: -121.90499804392056 }, { lat: 37.31931149192631, lng: -121.88577196708246 }],
      missionPlanner: [{lat: 37.3174079734459,lng: -121.90150402360685}, {lat: 37.31830388363351,lng: -121.9007744627548}, {lat: 37.31952401080884,lng: -121.89993761354215}, {lat: 37.32060760365127,lng: -121.8991544085098}, {lat: 37.32193180333137,lng: -121.89852140718229}]
      // missionPlanner: [{ lat: 31.3174079734459, lng: -121.90150402360685 }, { lat: 35.31830388363351, lng: -121.9007744627548 }, { lat: 39.31952401080884, lng: -121.89993761354215 }, { lat: 42.32060760365127, lng: -121.8991544085098 }, { lat: 45.32193180333137, lng: -121.89852140718229 }]

    },
    {
      _id: 45698,
      id: "Drone ID #2",
      number: 5,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
      currentLocation: { lng: -121.85753289484508, lat: 37.32362510248663 },
      droneTracking: [{ lat: 37.3319485736073, lng: -121.92867279052734 }, { lat: 37.348547540923164, lng: -121.9088070055997 }, { lat: 37.3319485736073, lng: -121.92867279052734 }, { lat: 37.348547540923164, lng: -121.9088070055997 }],
      missionPlanner: [{ lat: 37.3174079734459, lng: -121.90150402360685 }, { lat: 37.31830388363351, lng: -121.9007744627548 }, { lat: 37.31952401080884, lng: -121.89993761354215 }, { lat: 37.32060760365127, lng: -121.8991544085098 }, { lat: 37.32193180333137, lng: -121.89852140718229 }]
    },
    {
      _id: 54909,
      id: "Drone ID #3",
      number: 6,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
      currentLocation: { lng: -121.80972520136363, lat: 37.33679708256735 },
      droneTracking: [{ lat: 37.32020916852676, lng: -121.89545631408691 }, { lat: 37.329020380034876, lng: -121.90494842090712 }, { lat: 37.32020916852676, lng: -121.89545631408691 }, { lat: 37.329020380034876, lng: -121.90494842090712 }],
      missionPlanner: [{ lat: 37.3174079734459, lng: -121.90150402360685 }, { lat: 37.31830388363351, lng: -121.9007744627548 }, { lat: 37.31952401080884, lng: -121.89993761354215 }, { lat: 37.32060760365127, lng: -121.8991544085098 }, { lat: 37.32193180333137, lng: -121.89852140718229 }]
    },
  ];
  const user = JSON.parse(localStorage.getItem("user"));
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
    missionPlanner: "",
  })
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

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

  useEffect(() => {
    if (!user || user.role === "admin") {
      setFlag(true);
    }

  }, []);


  const body = () => {
    {
      if (drone_id === null || drone_id === "") {
        return
      }
    }
    return (
      <div className={styles.couldDroneMap}>
        <div className={styles.homepageHeader}>Drone Booking</div>
        <div className={styles.droneDetailSection}>
          <div className={styles.simulatedDrone}>
            <div className={styles.simulatedDroneSec}>
              {flag ? <>All Drone Tracking</> : <>Booking Schedules</>}
            </div>
            <div
              className={styles.simulatedDroneSec}
              onClick={() => {
                if (flag) {
                  window.location = "/dashboard/drone/cloud/map";
                }
              }}
            >
              {flag ? <>Particular Drone Tracking</> : <>Mission Planner</>}
            </div>
            <div
              className={styles.simulatedDroneSec}
              onClick={() => {
                if (flag) {
                  window.location = "/dashboard/drone/cloud/tracking";
                }
              }}
            >
              {flag ? <>Mission Planner</> : <>Pilot Management</>}
            </div>
          </div>
        </div>
        <div className={styles.droneMap}>
          {flag ? <>All Drone Tracking</> : <>Mission Planner</>}
        </div>
        <div className={styles.droneMap}>{droneData.id}</div>
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
          <Map
            Lines={true}
            pointerCoordinates={droneData.droneTracking}
            isDisabled={true}
            draggable={false}
            missionPlanner={droneData.missionPlanner}
          />
        </div>
        <div style={{ display: "flex", gap: "400px" }}>
          <div className={styles.back}>Back</div>
          <div className={styles.confirm}>Confirm</div>
        </div>
      </div>
    );
  };

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

        <Layout>{body()}</Layout>
      </div>
    </>
  );
};

export default DroneCatalog;
