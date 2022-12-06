import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import DashboardIcon from "../../assets/images/dashboardIcon.svg";
import DashboardIconBlack from "../../assets/images/dashboardBlack.svg";
import KeySquare from "../../assets/images/key-square.svg";
import ThreedSquare from "../../assets/images/3d-square.svg";
import RightArrow from "../../assets/images/right-arrow.svg";
import PercentageIcon from "../../assets/images/percentageIcon.svg";
import WalletMoney from "../../assets/images/walletmoney.svg";
import UserSquare from "../../assets/images/user-square.svg";
import Tracking from "../../assets/images/tracking.svg";

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
      url: "/drone/cloud/tracking",
      isSelected: route.pathname === "/drone/cloud/tracking" ? true : false,
    },
    {
      imgUrl: ThreedSquare,
      text: "Drone Catalog",
      hasMoreOpt: true,
      isSelected: route.pathname === "/drone/catalog" ? true : false,
      url: "/drone/catalog",
    },
    {
      imgUrl: KeySquare,
      text: "Maintenance",
      hasMoreOpt: true,
      url: "/maintenance",
      isSelected: route.pathname === "/maintenance" ? true : false,
    },
    {
      imgUrl: PercentageIcon,
      text: "My Bookings",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: WalletMoney,
      text: "Service Reports",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: UserSquare,
      text: "Profile",
      hasMoreOpt: true,
      isSelected: false,
      url: "/",
    },
    {
      imgUrl: PercentageIcon,
      text: "Simulation Management",
      hasMoreOpt: true,
      url: "/",
      isSelected: route.pathname === "/" ? true : false,
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
          navigate("/drone/cloud/dashboard/map");
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
