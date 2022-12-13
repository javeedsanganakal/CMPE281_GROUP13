import React, { useState } from "react";
import Header from "../../../components/header";
import styles from "./pilotSchedule.module.scss";
import DataCollectionImg from "../../../Assets/data-collection-img.svg";
import SurveillanceImg from "../../../Assets/surveillance-img.svg";
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";
const PilotSchedule = () => {
  const [value, onChange] = useState(new Date());
  const data = [
    {
      date: "29/06/2022",
      time: "10:00 am",
      address: "3671 Old Toll Road, Mariposa, CA 95338",
      name: "West Plot A Crop",
      img: DataCollectionImg,
      title: "Data Collection",
    },
    {
      date: "01/07/2022",
      time: "10:00 am, 8:00 pm",
      address: "3671 Old Toll Road, Mariposa, CA 95338",
      name: "East Plot D Livestock",
      img: SurveillanceImg,
      title: "Surveillance",
    },
  ];
  const availabilityData = [
    { date: "29/06/2022", time: "8:00 am - 5:00 pm" },
    { date: "29/06/2022", time: "8:00 am - 5:00 pm" },
  ];

  return (
    <div>
      <Header />
      <div className={styles.pilotScheduleContainer}>
        <div className={styles.leftDiv}>
          <div className={styles.title}>Pilot Schedule</div>
          <div className={styles.calendarDiv}>
            {/* <Calendar onChange={onChange} value={value} /> */}
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.upcomingDiv}>
            <div className={styles.titleDiv}>
              <div className={styles.colourDiv}>
                <div className={styles.greenDiv}></div>
              </div>
              <div className={styles.contentDiv}>
                <div> Upcoming Flights</div>
              </div>
            </div>
            {data.map((e) => {
              return (
                <div className={styles.collectionDiv}>
                  <div className={styles.detailsDiv}>
                    <div className={styles.dateDiv}>{e.date}</div>
                    <div className={styles.timeDiv}>{e.time}</div>
                    <div className={styles.addressDiv}>{e.address}</div>
                    <div className={styles.nameDiv}>{e.name}</div>
                  </div>
                  <div className={styles.imageDiv}>
                    <div className={styles.title}> {e.title} </div>
                    <div className={styles.image}>
                      <img src={e.img} placeholder="image" />
                    </div>
                  </div>
                  <div className={styles.buttonDiv}>
                    <button>Select </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.availabilityDiv}>
            <div className={styles.titleDiv}>
              <div className={styles.colourDiv}>
                <div className={styles.blueDiv}></div>
              </div>
              <div className={styles.contentDiv}>
                <div> Availability:</div>
              </div>
            </div>
            {availabilityData.map((e) => {
              return (
                <div className={styles.collectionDiv}>
                  <div className={styles.detailsDiv}>
                    <div className={styles.date}> {e.date}</div>
                    <div className={styles.time}>{e.time}</div>
                  </div>
                  <div className={styles.buttonDiv}>
                    <button>Edit </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PilotSchedule;
