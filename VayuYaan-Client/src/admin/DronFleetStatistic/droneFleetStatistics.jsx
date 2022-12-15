import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import "./droneFleetStatistics.css";
import Img from "./images/graph.svg";

const DroneFleetStatic = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {/* <SideBar /> */}
        <div id="hero-page-droon-fleet">
          <p id="donor-cloud-tracking">Drone Cloud Tracking Statistics</p>
          <div id="drone-btn-box">
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
          <br></br>
          <p id="no-of-drone-status">Number of drones By status</p>
          <br></br>
          <div id="active-status-box">
            <div>
              <p className="active-status">Active</p>
              <p id="active-status-count">4</p>
            </div>
            <div>
              <p className="active-status">stopped</p>
              <p id="stopped-status-count">3</p>
            </div>
            <div>
              <p className="active-status">Connected</p>
              <p id="connected-status-count">1</p>
            </div>
            <div>
              <p className="active-status">Registered</p>
              <p id="registere-status-count">5</p>
            </div>
          </div>
          <br></br>
          <p id="no-drones-remark">Number of Drones By Service Type</p>
          <div id="remark-point">
            <div className="remark-point-data">
              <div id="data-collect"></div>
              <p>Data collect</p>
            </div>
            <div className="remark-point-data">
              <div id="data-surveillance"></div>
              <p>Surveillance</p>
            </div>
            <div className="remark-point-data">
              <div id="data-payload"></div>
              <p>Payload</p>
            </div>
          </div>
          <br></br>
          <div id="circle-box">
            <div id="circle-breen">74%</div>
            <div id="circle-blue">34%</div>
            <div id="circle-red">16%</div>
          </div>
          <p id="statics-view">Choose a Stastics to View</p>
          <br></br>
          <div id="stastics-btn-container">
            {/* <p id="stattic-btn-p">
                <div className="text-view">stastics service type</div>
              </p> */}

            <select>
              <option>stastics service type</option>
              <option>55</option>
              <option>77</option>
            </select>
          </div>
          <div className="graph-div">
            <div className="graph-title">Flights Per Service Type: 4 avg</div>
            <img src={Img} alt="graph" />
          </div>
        </div>
      </div>
    </>
  );
};
export default DroneFleetStatic;
