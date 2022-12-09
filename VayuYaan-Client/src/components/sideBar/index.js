import React, { useEffect, useMemo, useState } from "react";
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
  const user = JSON.parse(localStorage.getItem("user"));

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
      isSelected:
        route.pathname === "/dashboard/farmer/maintenance" ? true : false,
    },
    {
      imgUrl: PercentageIcon,
      text: "My Bookings",
      hasMoreOpt: true,
      isSelected:
        route.pathname === "/dashboard/farmer/myBookings" ? true : false,
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
      isSelected:
        route.pathname === "/dashboard/farmer/dronesimulation/" ? true : false,
    },
  ];
  console.log("route", selected);
  // useEffect(() => {
  //   if(route.pathname==="/maintenance"){
  //     setSideBatOpt(sideBarOpt)
  //   }
  // }, [route])

  const adminSideBar = [
    {
      imgUrl: KeySquare,
      text: "Farmers Management",
      hasMoreOpt: true,
      url: "/dashboard/farmer/management",
      isSelected:
        route.pathname === "/dashboard/farmer/management" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: " Drone Management",
      hasMoreOpt: true,
      url: "/dashboard/drone/management",
      isSelected:
        route.pathname === "/dashboard/drone/management" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: "Pilots Management",
      hasMoreOpt: true,
      url: "/dashboard/pilot/management",
      isSelected:
        route.pathname === "/dashboard/pilot/management" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: "Farms Management",
      hasMoreOpt: true,
      url: "/dashboard/farm/management",
      isSelected:
        route.pathname === "/dashboard/farm/management" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: " Drone Tracking",
      hasMoreOpt: true,
      url: "/dashboard/drone/cloud/map",
      isSelected:
        route.pathname === "/dashboard/drone/cloud/map" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: "Cloud Dashboard Status",
      hasMoreOpt: true,
      url: "/admin/cloudDashboard",
      isSelected: route.pathname === "/admin/cloudDashboard" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: " AI Models",
      hasMoreOpt: true,
      url: "/admin/aimodels",
      isSelected: route.pathname === "/admin/aimodels" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: "AR/VR Tracking",
      hasMoreOpt: true,
      url: "/admin/arvrtracking",
      isSelected: route.pathname === "/admin/arvrtracking" ? true : false,
    },
    {
      imgUrl: KeySquare,
      text: " Statistics",
      hasMoreOpt: true,
      url: "/admin/statistics",
      isSelected: route.pathname === "/admin/statistics" ? true : false,
    },
  ];

  const sideBarData = useMemo(() => {
    if (user.role === "admin") {
      return [...sidebarOptions.slice(0, 2), ...adminSideBar];
    } else {
      return [...sidebarOptions];
    }
  }, [user]);

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
        {sideBarData.map((item) => {
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
