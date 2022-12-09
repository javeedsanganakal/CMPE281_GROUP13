import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import SearchIcon from "../../Assets/searchIcon.svg";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Header() {
  const [user, setUser] = useState();
  const onLogout = () => {
    localStorage.removeItem("user");
    cookies.remove("pilot");
    cookies.remove("farm");
    cookies.remove("farmer");
    window.location = "/auth/login";
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const goHome = () => {
    if (user.role === "farmer") {
      window.location = "/profile/farmer";
    }
    if (user.role === "pilot") {
      window.location = "/profile/pilot";
    }
    if (user.role === "admin") {
      window.location = "/dashboard/farmer/management";
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div></div>
      <div className={styles.headerOptions}>
        <div onClick={goHome}>Home</div>
        <div>Contact</div>
        <div>Profile</div>
        <div className={styles["nav-item"]} style={{ cursor: "pointer" }}>
          <button
            className={styles["nav-item"]}
            style={{ background: "none", color: "white", border: "none" }}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div>
        <img src={SearchIcon} />
      </div>
    </div>
  );
}

export default Header;
