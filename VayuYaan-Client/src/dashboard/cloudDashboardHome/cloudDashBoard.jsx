import React from "react";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import "./cloudDashBoard.css"

const DashBoarHome = () => {
    return (
        <>
            <Header />
            <div style={{ display: "flex" }}>
                <SideBar />
                <div id="hero-page">
                    <div>
                        <span id="dron-cloud-dash-board">Drone Cloud Dashboard</span>
                        <span id="welcome-admin">Welcome, Admin!</span>
                    </div>
                    <div id="drone-btn-box">
                        <button className="drone-btn">Drone Cloud Dashboard</button>
                        <button className="drone-btn">Simulated Drone Cloud</button>
                        <button className="drone-btn">Drone Services Map</button>
                    </div>

                    <div id="drone-static-container">
                        <h1 className="box-header" >Drone Statistics</h1><br></br>

                        <div id="drone-static-upper-box">
                            <span id="status-p">Status</span>
                            <span id="total-p">Total</span>
                            <div id="dron-static-box1" >
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>Active</h6>
                                </div>
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>Stopped</h6>
                                </div>
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>Connnected</h6>
                                </div>
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>Registered</h6>
                                </div>
                                <div id="total-drone" className="card-box">
                                    <h5>12</h5>
                                    <h6>Drones</h6>
                                </div>
                            </div>
                        </div>

                        <div id="drone-static-lower-box">
                            <p id="mode-p">Drone Mode</p><br></br>
                            <div id="dron-static-box2" >
                                <div className="card-box">
                                    <h5>8</h5>
                                    <h6>DJI MIni SE</h6>
                                </div>
                                <div className="card-box">
                                    <h5>0</h5>
                                    <h6>DJI Agras T20</h6>
                                </div>
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>DJI Phantom Pro</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div id="drone-service-static-1">
                            <h1 className="box-header">Drone service Static</h1><br></br>
                            <p id="type-p">Type</p><br></br>
                            <div>
                                <div className="dron-fleet-stattic-box" >
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p id="status-p2">Status</p><br></br>
                                <div className="dron-fleet-stattic-box" >
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p id="service-p">Service Type</p><br></br>
                                <div className="dron-fleet-stattic-box" >
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                    <div className="card-box">
                                        <h5>3</h5>
                                        <h6>DJI Phantom Pro</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="dron-fleet-stattic-2">
                            <h1 className="box-header">Drone fleet Static</h1><br></br>
                            <p id="total-p2">Total</p>
                            <div id="dron-fleet-stattic-2-card">
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>DJI Phantom Pro</h6>
                                </div>
                                <div className="card-box">
                                    <h5>3</h5>
                                    <h6>DJI Phantom Pro</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashBoarHome