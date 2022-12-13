import React, { useState } from "react";
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import "./FarmerMain.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import vector from "./Mockups/Vector.png";
import calul from "./Mockups/Vector@2x.png";
import addvector from "./Mockups/addvector.png";
import Layout from "../../components/layouts";

export default function Farmermain() {
  const [value, onChange] = useState(new Date());

  // const Onchange = date =>{
  //     setDate(date)
  // }

  return (
    <>
      {/* <Header />
      <SideBar /> */}
      <Layout>
      <div className="farmerMain-conatiner">
        <div className="farmer-heading">
          <h1 className="heading-farmer">Drone ID #2</h1>
          <p className="heading-font">Select the Service time</p>
        </div>
        <section className="heading-bar">
          <div className="box-1">
            <div className="vectorbox-one">
              <p className="service">Service</p>
              <span className="pair">Pair</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-chevron-down"
                id="new-arrowfunction"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
            <span className="vectorbox-two">
              <p className="date-Time">Date & Time</p>
              <span className="Real-date">05/12/2022</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-calendar4-week"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
            </span>
          </div>
        </section>
        <article>
          <div className="farmer-main-conatiner">
            <div className="myFirst-box">
              <div className="dateAndTimeTo-from">
                <div className="time-to">
                  <p className="maintaining-name-1">From</p>
                  <span className="maintaining-data-1">29/06/2022</span>
                </div>
                <div className="time-from">
                  <p className="maintaining-name-2">Until</p>
                  <span className="maintaining-data-2">22/10/2022</span>
                </div>
              </div>
              <div className="real-react-calender">
                <div className="myCalender">
                  <Calendar onChange={onChange} value={value} />
                </div>
              </div>
              <div>
                <button className="backButton-01">Back</button>
              </div>
            </div>
            <div className="mySecond-box">
              <div className="second-conatiner-farmer">
                <div className="farmer-details-01">
                  <h3 className="label-farmer">Service :</h3>
                  <p className="lavel-answer">Repair</p>
                </div>
                <div className="farmer-details-01">
                  <h3 className="label-farmer">Duration :</h3>
                  <p className="lavel-answer">7 Days</p>
                </div>
                <h3 className="farmer-details-02">Service Start Time</h3>
              </div>
              <div className="details-RightSiebox">
                <div>
                  <p className="time-farmer-rightSide">10:00 AM</p>
                </div>
                <div className="maine-delete-butoon">
                  <button className="detail-delete-button">Delete</button>
                </div>
                <div className="maine-add-timeProper">
                  <h3 className="add-item-icon-name">Add a Time</h3>
                  <div className="add-icon-in-div">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#00A3FF"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <button className="farmer-icon-next">Confirm</button>
              </div>
            </div>
            <div className="last-next-button01">
              <button className="next-last-button">NEXT</button>
            </div>
          </div>
        </article>
      </div>
      </Layout>
    </>
  );
}
