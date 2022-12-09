import React, { useEffect, useMemo, useState } from "react";
import style from "../../dashboard/dashboard.module.scss";
import Header from "../../components/header";
import AddModal from "./Modal";
import styles from "./pilot.module.scss";
import PilotTable from "./Table";
import ViewModal from "./ViewModal";
import axios from "axios";
import { url } from "../../utils/constants";
import Layout from "../../components/layouts";

const CreatePilotManagement = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [search, setSearch] = useState("");

  if (!user || user.role !== "admin") {
    window.location = "/adminaccess";
  }
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleView, setIsVisibleView] = useState(false);

  const [fromValues, setFromValues] = useState({
    fullName: "",
    pilotId: "",
    email: "",
    phoneNumber: "",
    sEmail: "",
    password: "",
    dob: "",
    gender: "",
    address: "",
    _id: "",
  });
  const [data, setData] = useState([]);

  const [id, setId] = useState("");
  const [editId, setEditId] = useState("");

  const viewData = useMemo(() => {
    return data.find((data) => data._id === id);
  }, [id]);

  const searchData = useMemo(() => {
    if (!search) {
      return data;
    }
    return data.filter((ele) =>
      ele.fullName.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const deleteFarm = (id) => {
    axios
      .delete(`${url}/api/pilot/delete/${id}`, {
        "Content-Type": "application/json",
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${url}/api/pilot/`, {
        "Content-Type": "application/json",
      })
      .then(function (response) {
        console.log(response);
        setData(
          response.data.data.map((data) => {
            return {
              ...data,
              dob: data.birthday,
              pilotId: data.certificate.idnumber,
              fullName: data.name,
              phoneNumber: data.phone,
              sEmail: data.email,
              address: data.certificate.address,
            };
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const editFarm = (id) => {
    const curFarm = data.filter(function (farm) {
      return farm._id === id;
    });
    setFromValues(curFarm[0]);
  };

  const editFarmRequest = () => {
    axios
      .put(
        `${url}/api/pilot/edit/${fromValues._id}`,
        {
          name: fromValues?.fullName,
          phone: fromValues?.phoneNumber,
          email: fromValues?.email,
          birthday: fromValues?.dob,
          gender: fromValues?.gender,
          billingInformation: fromValues?.billingInformation || {},
          driverlicense: fromValues?.driverlicense || {},
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Layout>
        <div className={style["body"]}>
          <div className={styles.droneDetailSection}>
            <div className={styles.simulatedDrone}>
              <div className={styles.simulatedDroneSec}>
                Catalog Manaagement
              </div>
              <div className={styles.simulatedDroneSec}>Booking Schedules</div>
              <div className={styles.simulatedDroneSec}>Mission Planner</div>
              <div className={styles.simulatedDroneSec}>Pilot Management</div>
            </div>
          </div>
          <div className={styles.des}>
            Assign or remove pilots from bookings
          </div>
          <div className={styles.searchInput}>
            <input
              placeholder="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div>Search</div>
          </div>
          <div className={styles.addHead}>
            <div className={styles.title}>Pilots</div>
            <div
              className={styles.addBtn}
              onClick={() => {
                setIsVisible(true);
                setFromValues({
                  fullName: "",
                  pilotId: "",
                  email: "",
                  phoneNumber: "",
                  sEmail: "",
                  password: "",
                  dob: "",
                  gender: "",
                  address: "",
                  id: "",
                });
              }}
            >
              Create Pilot
            </div>
          </div>
          <div className={styles.table}>
            <PilotTable
              data={searchData}
              setId={setId}
              id={id}
              setEditId={setEditId}
              setIsVisible={setIsVisible}
              setIsVisibleView={setIsVisibleView}
              editFarm={editFarm}
              deleteFarm={deleteFarm}
            />
          </div>
          <AddModal
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            fromValues={fromValues}
            setFromValues={setFromValues}
            data={data}
            editId={editId}
            setData={setData}
            setEditId={setEditId}
            editFarmRequest={editFarmRequest}
          />
          <ViewModal
            isVisibleView={isVisibleView}
            setIsVisibleView={setIsVisibleView}
            viewData={viewData}
            setId={setId}
          />
        </div>
      </Layout>
    </>
  );
};

export default CreatePilotManagement;
