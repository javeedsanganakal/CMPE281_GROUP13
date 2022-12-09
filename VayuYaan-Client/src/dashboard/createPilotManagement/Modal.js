import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Steps } from "antd";
import styles from "./pilot.module.scss";

const AddModal = ({
  isVisible,
  setIsVisible,
  fromValues,
  setFromValues,
  setData,
  editId,
  setEditId,
  editFarmRequest,
}) => {
  const [current, setCurrent] = useState(0);
  console.log(editId, "editId");
  const handleOk = (id) => {
    if (current === 1 && !id) {
      setData((prev) => {
        return [...prev, fromValues];
      });
      setIsVisible(false);
      setCurrent(0);
      return;
    } else if (id && current === 1) {
      editFarmRequest();
      setIsVisible(false);
      setCurrent(0);
      setEditId("");
    } else {
      setCurrent(1);
    }
  };
  const handleCancel = () => {
    setIsVisible(false);
    setCurrent(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromValues({
      ...fromValues,
      [name]: value,
      id: Math.floor(Math.random() * 100000),
    });
  };
  return (
    <>
      <Modal
        open={isVisible}
        centered={true}
        onCancel={handleCancel}
        cancelButtonProps={false}
        footer={[
          <Button
            type="primary"
            onClick={() => handleOk(fromValues?._id || "")}
          >
            Next
          </Button>,
        ]}
      >
        <Steps
          progressDot
          current={current}
          items={[{}, {}]}
          style={{ margin: "30px 0 0 0" }}
        />
        {current === 0 && (
          <>
            <div className={styles.heading}>Pilot</div>
            <div className={styles.inputs}>
              <input
                placeholder="Full Name"
                className={styles.input}
                onChange={handleChange}
                value={fromValues.fullName}
                name="fullName"
              />
              <input
                placeholder="Pilot ID"
                className={styles.input}
                onChange={handleChange}
                value={fromValues.pilotId}
                name="pilotId"
              />
              <input
                placeholder="Email"
                className={styles.input}
                onChange={handleChange}
                value={fromValues.email}
                name="email"
              />
              <input
                placeholder="Phone Number"
                className={styles.input}
                onChange={handleChange}
                value={fromValues.phoneNumber}
                name="phoneNumber"
              />
            </div>
          </>
        )}
        {current === 1 && (
          <div className={styles.inputs}>
            <input
              placeholder="Email"
              className={styles.input}
              onChange={handleChange}
              value={fromValues.sEmail}
              name="sEmail"
            />
            <input
              placeholder="Password"
              className={styles.input}
              onChange={handleChange}
              value={fromValues.password}
              name="password"
            />
            <input
              placeholder="D.O.B"
              className={styles.input}
              onChange={handleChange}
              value={fromValues.dob}
              name="dob"
            />
            <input
              placeholder="Gender"
              className={styles.input}
              onChange={handleChange}
              value={fromValues.gender}
              name="gender"
            />
            <input
              placeholder="Address"
              className={styles.input}
              onChange={handleChange}
              value={fromValues.address}
              name="address"
            />
          </div>
        )}
      </Modal>
    </>
  );
};
export default AddModal;
