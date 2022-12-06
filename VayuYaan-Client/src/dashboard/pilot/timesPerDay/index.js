import React, { useState } from 'react'
import Header from '../../../components/header';
import styles from './timesPerDay.module.scss'
import Layout from '../../../components/layouts';
import {
  Datepicker,
} from "@meinefinsternis/react-horizontal-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
const TimesPerDay = ({
  title,
  btn
}) => {
     const [value, onChange] = useState(["10:00", "11:00"]);
    const [date, setDate] = useState({
      startValue: new Date(),
      rangeDates: [],
    });
    console.log(date, "date");
    const handleChange = (d) => {
      const [startValue, endValue, rangeDates] = d;
      setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
    };
  return (
    <div>

      {/* <Layout> */}
      <div className={styles.timesPerDayContainer}>
        <div className={styles.titleDiv}>
          <div>{title}</div>
        </div>
        <div className={styles.contentDiv}>
          <div className={styles.datePicker}>
            <Datepicker
              onChange={handleChange}
              startValue={date.startValue}
              endValue={date.endValue}
            />
          </div>
          <div className={styles.timePicker}>
            <TimeRangePicker onChange={onChange} value={value} />
          </div>
        </div>
        <div className={styles.ButtonDiv}>
          <button onClick={() => alert(`Schedule Confirmed for ${date.startValue.toString().substring(0, 15)} ${value}!`)}>{btn || 'Confirm'} </button>
        </div>
      </div>
      {/* </Layout> */}
    </div>
    
  );
}

export default TimesPerDay