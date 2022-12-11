import styles from "../dashboard.module.scss";
import Navbar from "../../common/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../utils/constants";
import Layout from "../../components/layouts";
import Header from "../../components/header";
import PilotSideBar from "../../components/pilotSidebar";

function MyBookings() {
  const [drones, setDrones] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  let flag = false;

  if (user.role === "farmer") {
    flag = true;
  }
  if (user.role === "farmer") {
    flag = true;
  }

  useEffect(() => {
    axios
      .get(`${url}/api/drone/`)
      .then((response) => {
        // const responseFilter = response.data.data.filter(function(item) {
        //     return item._id === JSON.parse(localStorage.get("farmer"))._id
        // })
        setDrones(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function randomDate(start, end) {
    console.log(
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    );
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }
  function randomDate(start, end) {
    console.log(
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    );
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  function body() {
    return (
      <div className={styles["container"]}>
        <div className={styles["body"]}>
            <div className={styles["container-fluid"]}>
              <div className={styles["info-container"]}>
                <div className={styles["header"]}>Welcome, Adny!</div>
                <div className={styles["sub-header"]}>
                  Check the status of your drone service bookings here.
                </div>
              </div>

              <div className={styles["table"]}>
                <div className={styles["title"]}>All Bookings</div>
                <div className={styles["display"]}>
                  <table>
                    <tr>
                      <th>#</th>
                      <th>Drone ID#</th>
                      {/* <th>Farm Id</th> */}
                      <th>Farmer Id</th>
                      <th>Service</th>
                      <th>Created At</th>
                      <th>Status</th>
                    </tr>
                    {drones.map((drone, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{drone._id}</td>
                          {/* <td>{drone.farmId}</td> */}
                          <td>{drone.farmerId}</td>
                          <td>{drone.service}</td>
                          <td>
                            {drone.createdAt ||
                              randomDate(new Date(2012, 0, 1), new Date())
                                .toString()
                                .substring(0, 15)}
                          </td>
                          <td>
                            <button>{drone.status}</button>
                          </td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
            </div>
          </div>
        </div>
      // </div>
    );
  }

  return (
    <>
      {flag && <Layout>{body()}</Layout>}
      {!flag && (
        <>
          <Header />
          <div style={{display: "flex"}}>
            <PilotSideBar/>
            {body()}
          </div>
        </>
      )}
    </>
  );
}

export default MyBookings;

