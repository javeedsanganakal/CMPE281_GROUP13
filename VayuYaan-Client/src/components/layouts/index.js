import React from "react";
import Header from "../header";
import SideBar from "../sideBar";
import styles from "./Layout.module.scss"

function Layout({children}) {
  return (
    <div>
      <Header />
      <div className={styles.sidebarLayout}>
        <SideBar />
        <div className={styles.layoutChildren}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
