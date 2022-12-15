import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import styles from "./cloudDashboardHome.module.scss";

const CloudDashBoard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.containerDiv}>
      <Header />
      <div className={styles.bodyDiv}>
        {/* <SideBar /> */}
        <div className={styles.contentDiv}>
          <div className={styles.headerDiv}>
            <div>Drone Cloud Dashboard</div>
            <div>Welcome, Admin!</div>
          </div>
          <div className={styles.droneBtnBox}>
            <button
              className={styles.droneBtn}
              onClick={() => navigate("/admin/cloudDashboard")}
            >
              Drone Cloud Dashboard
            </button>
            <button
              className="drone-btn"
              onClick={() => navigate("/admin/aimodels")}
            >
              AI Modals
            </button>
            <button
              className="drone-btn"
              onClick={() => navigate("/admin/arvrtracking")}
            >
              AR/VR Tracking
            </button>
            <button
              className="drone-btn"
              onClick={() => navigate("/admin/statistics")}
            >
              Statistics
            </button>
          </div>
          <div className={styles.dronStatistics}>
            <div className={styles.headingDiv}>Drone Statistics</div>
            <div className={styles.contentDiv}>
              <div className={styles.topDiv}>
                <div className={styles.warapperDiv}>
                  <span> Status</span>
                  <div className={styles.statusDiv}>
                    <div className={styles.smallDiv}>
                      <div className={styles.number} style={{ color: "green" }}>
                        3
                      </div>
                      <div className={styles.text}>Active</div>
                    </div>
                    <div className={styles.smallDiv}>
                      <div className={styles.number} style={{ color: "red" }}>
                        3
                      </div>
                      <div className={styles.text}>Stopped</div>
                    </div>
                    <div className={styles.smallDiv}>
                      <div
                        className={styles.number}
                        style={{ color: "yellow" }}
                      >
                        3
                      </div>
                      <div className={styles.text}>Connected</div>
                    </div>
                    <div className={styles.smallDiv}>
                      <div className={styles.number} style={{ color: "blue" }}>
                        3
                      </div>
                      <div className={styles.text}>Registered</div>
                    </div>
                  </div>
                </div>
                <div className={styles.warapperDiv}>
                  <span> total</span>
                  <div className={styles.totalDiv}>
                    <div className={styles.smallDiv}>
                      <div className={styles.number}>12</div>
                      <div className={styles.text}>Drones </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomDiv}>
                <div className={styles.warapperDiv}>
                  <span> Drone Model</span>
                  <div className={styles.statusDiv}>
                    <div className={styles.smallDiv}>
                      <div className={styles.number}>3</div>
                      <div className={styles.text}>Active</div>
                    </div>
                    <div className={styles.smallDiv}>
                      <div className={styles.number}>3</div>
                      <div className={styles.text}>Stopped</div>
                    </div>
                    <div className={styles.smallDiv}>
                      <div className={styles.number}>3</div>
                      <div className={styles.text}>Connected</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottomBoxs}>
            <div className={styles.dronServiceStatistics}>
              <div className={styles.headingDiv}>Dron Service Statistics</div>
              <div className={styles.contentDiv}>
                <div className={styles.bottomDiv}>
                  <div className={styles.warapperDiv}>
                    <span> total</span>
                    <div className={styles.statusDiv}>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Active</div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Stopped</div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Connected</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.warapperDiv}>
                    <span> total</span>
                    <div className={styles.statusDiv}>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Active</div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Stopped</div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Connected</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.warapperDiv}>
                    <span> total</span>
                    <div className={styles.statusDiv}>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Active</div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Stopped</div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>Connected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.droneFleettatistics}>
              <div className={styles.headingDiv}>Dron Service Statistics</div>
              <div className={styles.contentDiv}>
                <div className={styles.bottomDiv}>
                  <div className={styles.warapperDiv}>
                    <span> total</span>
                    <div className={styles.statusDiv}>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>
                          Drones in client ID #0 fleet
                        </div>
                      </div>
                      <div className={styles.smallDiv}>
                        <div className={styles.number}>3</div>
                        <div className={styles.text}>
                          Drones in client ID #1 fleet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudDashBoard;
