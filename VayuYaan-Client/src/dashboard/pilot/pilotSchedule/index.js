import React, { useState } from "react";
import Header from "../../../components/header";
import styles from "./pilotSchedule.module.scss";
import stylesS from "../timesPerDay/timesPerDay.module.scss";
import DataCollectionImg from "../../../Assets/data-collection-img.svg";
import SurveillanceImg from "../../../Assets/surveillance-img.svg";
import "react-calendar/dist/Calendar.css";
import PilotSideBar from "../../../components/pilotSidebar";
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker";
const PilotSchedule = () => {
  const [value, onChange] = useState(new Date());

  const [date, setDate] = useState({
    startValue: new Date(),
    rangeDates: [],
  });
  console.log(date, "date");
  const handleChange = (d) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };

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
        <PilotSideBar />
        <div className={styles.leftDiv}>
          <div className={styles.title}>Pilot Schedule</div>
          <div className={stylesS.timesPerDayContainer}>
            <div className={stylesS.contentDiv} style={{ marginLeft: "-80px" }}>
              <div className={stylesS.datePicker}>
                <Datepicker
                  onChange={handleChange}
                  startValue={date.startValue}
                  endValue={date.endValue}
                />
              </div>
              <div className={stylesS.timePicker}>
                <TimeRangePicker onChange={onChange} value={value} />
              </div>
            </div>
            <div className={stylesS.ButtonDiv} style={{ marginLeft: "-80px" }}>
              <button
                onClick={() =>
                  alert(
                    `Schedule Confirmed for ${date.startValue
                      .toString()
                      .substring(0, 15)} ${value}!`
                  )
                }
              >
                confirm
              </button>
            </div>
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
