import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
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

function SideBar() {
  const route = useLocation();
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  let sidebarOptions = [
    {
      imgUrl: KeySquare,
      text: "Drone Cloud Tracking",
      hasMoreOpt: true,
      url: "/dashboard/drone/cloud/tracking",
      isSelected:
        route.pathname === "/dashboard/drone/cloud/tracking" ? true : false,
    },
    {
      imgUrl: ThreedSquare,
      text: "Mission Planner",
      hasMoreOpt: true,
      isSelected: route.pathname === "/dashboard/drone/catalog" ? true : false,
      url: "/dashboard/drone/catalog",
    },
    {
      imgUrl: KeySquare,
      text: "Maintenance",
      hasMoreOpt: true,
      url: "/dashboard/farmer/maintenance",
      isSelected: route.pathname === "/dashboard/farmer/maintenance" ? true : false,
    },
    {
      imgUrl: PercentageIcon,
      text: "My Bookings",
      hasMoreOpt: true,
      isSelected: route.pathname === "/dashboard/farmer/myBookings" ? true : false,
      url: "/dashboard/farmer/myBookings",
    },
    {
      imgUrl: WalletMoney,
      text: "Service Reports",
      hasMoreOpt: true,
      isSelected: false,
      url: "/dashboard/farmer/serviceReports",
    },
    {
      imgUrl: UserSquare,
      text: "Profile",
      hasMoreOpt: true,
      isSelected: route.pathname === "/profile/farmer" ? true : false,
      url: "/profile/farmer",
    },
    {
      imgUrl: PercentageIcon,
      text: "Simulation Management",
      hasMoreOpt: true,
      url: "/dashboard/farmer/dronesimulation/",
      isSelected: route.pathname === "/dashboard/farmer/dronesimulation/" ? true : false,
    },
  ];
  console.log("route", selected);
  // useEffect(() => {
  //   if(route.pathname==="/maintenance"){
  //     setSideBatOpt(sideBarOpt)
  //   }
  // }, [route])

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
        // className={selected ? styles.selectedSidebarText : styles.sidebarText}
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

export default SideBar;
