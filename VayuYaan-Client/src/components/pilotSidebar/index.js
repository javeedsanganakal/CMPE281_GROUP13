import React, { useEffect, useState } from "react";
import styles from "./PilotSidebar.module.scss";
import DashboardIcon from "../../Assets/dashboardIcon.svg";
import DashboardIconBlack from "../../Assets/dashboardBlack.svg";
import KeySquare from "../../Assets/key-square.svg";
import ThreedSquare from "../../Assets/3d-square.svg";
import RightArrow from "../../Assets/right-arrow.svg";
import PercentageIcon from "../../Assets/percentageIcon.svg";
import WalletMoney from "../../Assets/walletmoney.svg";
import UserSquare from "../../Assets/user-square.svg";
import Tracking from "../../Assets/tracking.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";

function PilotSideBar() {
  const route = useLocation();
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  let sidebarOptions = [
    {
      imgUrl: KeySquare,
      text: "Schedule Flight",
      hasMoreOpt: true,
      url: "/dashboard/pilot/scheduleOne/",
      isSelected:
        route.pathname === "/dashboard/pilot/scheduleOne/" ? true : false,
    },
    {
      imgUrl: ThreedSquare,
      text: "Upcoming Rides",
      hasMoreOpt: true,
      isSelected:
        route.pathname === "/dashboard/pilot/myBookings" ? true : false,
      url: "/dashboard/pilot/myBookings",
    },
    {
      imgUrl: KeySquare,
      text: "Edit",
      hasMoreOpt: true,
      url: "/profile/pilot",
      isSelected: route.pathname === "/profile/pilot" ? true : false,
    },
  ];

  return (
    <div className={styles.sideBarContainer}>
      <div
        className={selected ? styles.sideBarHeaderDark : styles.sideBarHeader}
        onClick={() => {
          setSelected(true);
          navigate("/dashboard/drone/cloud/dashboard/map");
        }}
      >
        <img
          src={selected ? DashboardIconBlack : DashboardIcon}
          className={selected && styles.sidebarIcon}
        />
        <div
        >
          Dashboard
        </div>
      </div>
      <div className={styles.sideBarContent}>
        {sidebarOptions.map((item) => {
          return (
            <Link className={styles.link} to={item.url}>
              <div
                className={
                  item.isSelected
                    ? styles.selectedSidebarOptWrapper
                    : styles.sidebarOptWrapper
                }
              >
                <div className={styles.sidebarOpt}>
                  {
                    <img
                      src={item.imgUrl}
                      className={item.isSelected && styles.sidebarIcon}
                    />
                  }
                  <div
                    className={
                      item.isSelected
                        ? styles.selectedSidebarText
                        : styles.sidebarText
                    }
                  >
                    {item.text}
                  </div>
                </div>
                {item.hasMoreOpt ? (
                  <div className={styles.rigthArrow}>
                    <img
                      src={RightArrow}
                      className={item.isSelected && styles.selectedSidebarIcon}
                    />
                  </div>
                ) : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PilotSideBar;
