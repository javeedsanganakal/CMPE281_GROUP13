import React from "react";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import crop from "./images/images(3).jfif";
import bargraph from "./images/slope-chart-in-excel-5.jpg";
import box from "./images/images.png";
import code from "./images/images(4).jfif";
import "./droneAIModelEvaluation.css";

function ModelEvaluations() {
  return (
    <div id="model-containerBody">
      <Header />
      {/* <SideBar /> */}
      <div className="model-container">
        <div className="head_dta">
          <h1 className="drone-title">Drone AI Model Evaluations</h1>
        </div>
        <div className="bar_list">
          <div id="drone-btn-box">
            <button className="drone-btn">Drone Cloud Dashboard</button>
            <button className="drone-btn">Simulated Drone Cloud</button>
            <button className="drone-btn">Drone Services Map</button>
          </div>
        </div>
        <div className="prt-service">
          <div className="prt-head">
            <div>
              <p>Service ID #1144</p>
            </div>
            <div>
              <img src={crop} alt="c1" />
            </div>
          </div>
          <div className="prt-para">
            <p className="c1">
              Crop Health<br></br>Object Detection Model: DenseNet-201
            </p>
            <p className="c2">n = 100 images</p>
          </div>
          <div id="graph-images">
            <div>
              <img
                src={box}
                alt="box"
                className="img2"
                style={{ width: "500px", height: "400px" }}
              />
            </div>{" "}
            <div>
              <img
                src={bargraph}
                alt="bar"
                className="img3"
                style={{ width: "500px", height: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelEvaluations;
