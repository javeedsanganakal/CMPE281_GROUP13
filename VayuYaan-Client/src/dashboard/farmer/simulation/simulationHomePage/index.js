import React from "react";
// import Header from "../header";
import Layout from "../../../../components/layouts";
// import SideBar from "../sideBar";
import TableSection from "./TableSection";
import styles from "./Home.module.scss";

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Simulation ID #",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Drone ID #",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Drone Model",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Mission Plan ID #",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Simulation Status",
  },
  {
    id: "serverId",
    numeric: true,
    disablePadding: false,
    label: "Server ID #",
  },
];

const headCellServer = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Server ID #",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Num Drones ",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Server Status",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Running Simulations",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Stop Server",
  },
  {
    id: "serverId",
    numeric: true,
    disablePadding: false,
    label: "Server",
  },
];

let rows = [
  {
    name: "ID# 12345",
    calories: "ID# 1",
    fat: "DJI Mini SE",
    carbs: 0,
    protein: "Running",
    serverId: 10,
  },
  {
    name: "ID# 12345",
    calories: "ID# 1",
    fat: "DJI Mini SE",
    carbs: 0,
    protein: "Running",
    serverId: 0,
  },
  {
    name: "ID# 12345",
    calories: "ID# 1",
    fat: "DJI Mini SE",
    carbs: 0,
    protein: "Running",
    serverId: 0,
  },
  {
    name: "ID# 12345",
    calories: "ID# 1",
    fat: "DJI Mini SE",
    carbs: 0,
    protein: "Running",
    serverId: 0,
  },
];


let rowServer = [
  {
    name: "ID# 1",
    calories: "3 / 5 max",
    fat: "OK",
    carbs: "Drone ID #12345, #23456, #45678",
    protein: "Stop",
    serverId: "EC2 g4dn.xlarge",
  },
  {
    name: "ID# 1",
    calories: "3 / 5 max",
    fat: "OK",
    carbs: "Drone ID #34567",
    protein: "Stop",
    serverId: "EC2 g4dn.xlarge",
  },
  {
    name: "ID# 1",
    calories: "3 / 5 max",
    fat: "OK",
    carbs: "Drone ID #34567",
    protein: "Stop",
    serverId: "EC2 g4dn.xlarge",
  },
  {
    name: "ID# 1",
    calories: "3 / 5 max",
    fat: "OK",
    carbs: "Drone ID #34567",
    protein: "Stop",
    serverId: "EC2 g4dn.xlarge",
  },
];


function HomePage() {
  return (
    <div>
      <Layout>
        <div className={styles.homePageContainer}>
          <div className={styles.homepageHeader}>
            Drone Simulation Management
          </div>
          <div className={styles.droneDetailSection}>
            <div className={styles.simulatedDrone}>
              <div className={styles.simulatedDroneSec}>Simulated Drones</div>
            </div>
            <div>
              <div className={styles.upcomingBookService}>
                <div className={styles.upcomingBook}> 1 </div>
                <div className={styles.upcomingBookWrap}>
                  Upcoming booked service
                </div>
              </div>
            </div>
          </div>
        <TableSection title="All Simulated Drones" createBtn="Create Simulation" headCells={headCells} rows={rows} />
        <div className={styles.serverTable}>
        <TableSection title="All Servers" createBtn="Create Server" headCells={headCellServer} rows={rowServer} />
        </div>
        </div>
      </Layout>
    </div>
  );
}

export default HomePage;
