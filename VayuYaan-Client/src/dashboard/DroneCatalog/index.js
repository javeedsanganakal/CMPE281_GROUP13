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
      //The starting and ending objects of this array missionPlanner are the coords of starting and ending point for the route, and the between latlngs are the pathway, modificatioon to them will change the pathway respectively
      //this can also be stored here from a api call, with same format
      missionPlanner: [{ lat: 37.32597322686474, lng: -121.90499804392056 },  { lat: 37.32432977630527, lng: -121.89847927733753 }, { lat: 37.323920251524754, lng: -121.89513188048694 }, { lat: 37.32327183272461, lng: -121.89251404448841 }, { lat: 37.321326542754605, lng: -121.88822251006458 }, { lat: 37.31876687397281, lng: -121.887578779901 }, { lat: 37.31893752127041, lng: -121.89199906035755 }, { lat: 37.32095113012193, lng: -121.89650517150257 }, { lat: 37.31931149192631, lng: -121.88577196708246 }]

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
      missionPlanner: [{ lat: 37.3319485736073, lng: -121.92867279052734 }, {lat: 37.33140942034401,lng: -121.92022705392446},{lat: 37.33413927127192,lng: -121.9167938263854}, {lat: 37.33905275295458,lng: -121.9164505036315},{lat: 37.34451180006539,lng: -121.9179096253356},{lat: 37.347514106823645,lng: -121.91370392160024}, { lat: 37.348547540923164, lng: -121.9088070055997 }]
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
      missionPlanner: [{ lat: 37.32020916852676, lng: -121.89545631408691 },{lat: 37.32067331936352,lng: -121.89818573155208}, {lat: 37.32248211512138,lng: -121.9010181442718},{lat: 37.324700390105086,lng: -121.90170478977961}, {lat: 37.32667971865281,lng: -121.90097522892756}, {lat: 37.32879549496132,lng: -121.90221977391047}, { lat: 37.329020380034876, lng: -121.90494842090712 }]
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
            zoom={15}
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
