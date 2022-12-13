import React from "react";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import "./DroonFleetStatic.css"

const DroonFleetStatic=()=>{
    return(
        <>
        <Header/>
        <div style={{ display: "flex" }}>
            <SideBar/>
            <div id="hero-page-droon-fleet">
                <p id="donor-cloud-tracking">Drone Cloud Tracking Statistics</p>
                <div id="tracking-btn-box">
                <button className="tracking-btn">Fleet Statistics</button>
                <button className="tracking-btn">Drone Map Tracking</button>
                <button className="tracking-btn">AR/VR tracking</button>
                </div><br></br>
                <p id="no-of-drone-status">Number of drones By status</p>
                <br></br>
                <div id="active-status-box">
                    <div><p className="active-status">Active</p>
                    <p id="active-status-count">4</p>
                    </div>
                    <div><p className="active-status">stopped</p>
                    <p id="stopped-status-count">3</p>
                    </div>
                    <div><p className="active-status">Connected</p>
                    <p id="connected-status-count">1</p>
                    </div>
                    <div><p className="active-status">Registered</p>
                    <p id="registere-status-count">5</p>
                    </div>
                </div><br></br>
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
                </div><br></br>
                <div id="circle-box">
                    <div id="circle-breen">74%</div>
                    <div id="circle-blue">34%</div>
                    <div id="circle-red">16%</div>
                </div>
                <p id="statics-view">Choose a Stastics View</p><br></br>
                <div id="stastics-btn-container">
                    <p id="stattic-btn-p">stastics</p>
                    Total Flights    <select>
                        <option>22</option>
                        <option>55</option>
                        <option>77</option>
                    </select>
                </div>
            </div>
        </div>
        </>
    )
}
export default DroonFleetStatic