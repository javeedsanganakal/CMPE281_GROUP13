import React, { useState } from "react";
import { Modal } from "antd";
import styles from "./pilot.module.scss";

const ViewModal = ({ isVisibleView, setIsVisibleView, viewData, setId }) => {
  const handleCancel = () => {
    setIsVisibleView(false);
    setId("");
  };

  return (
    <>
      <Modal
        open={isVisibleView}
        centered={true}
        onCancel={handleCancel}
        cancelButtonProps={false}
        footer={true}
      >
        <div className={styles.container}>
          <div className={styles.head}>
            <div className={styles.profile}></div>
            <div className={styles.names}>
              <div>{viewData?.fullName}</div>
              <div>{viewData?.pilotId}</div>
            </div>
          </div>
          <div className={styles.showData}>
            <div className={styles.head1}>
              <div className={styles.key}>Email</div>
              <div className={styles.value}>{viewData?.fullName}</div>
            </div>
            <div className={styles.head1}>
              <div className={styles.key}>Phone</div>
              <div className={styles.value}>{viewData?.phoneNumber}</div>
            </div>
            <div className={styles.head1}>
              <div className={styles.key}>Address</div>
              <div className={styles.value}>{viewData?.address}</div>
            </div>
            <div className={styles.head1}>
              <div className={styles.key}>Pilot ID</div>
              <div className={styles.value}>{viewData?.pilotId}</div>
            </div>
            <div className={styles.head1}>
              <div className={styles.key}>Password</div>
              <div className={styles.value}>{viewData?.password}</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ViewModal;
