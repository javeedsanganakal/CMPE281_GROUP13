import styles from "../dashboard.module.scss";
import Navbar from "../../common/navbar/Navbar";
import { useEffect, useState } from "react";
import FilterIcon from "../../Assets/filter.svg";
import EditIcon from "../../Assets/edit.svg";
import DeleteIcon from "../../Assets/delete.svg";
import EyeIcon from "../../Assets/eye.svg";
import axios from "axios";
import { url } from "../../utils/constants";

import Cookies from "universal-cookie";
import Layout from "../../components/layouts";
const cookies = new Cookies();

function FarmerManagement() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "admin") {
    window.location = "/adminaccess";
  }

  const [farms, setFarms] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [currentFarm, setCurrentFarm] = useState();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    axios
      .get(`${url}/api/farmer/`, {
        "Content-Type": "application/json",
      })
      .then(function (response) {
        console.log(response);
        setFarms(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log("drones", farms);

  const deleteFarm = (id) => {
    axios
      .delete(`${url}/api/farmer/delete/${id}`, {
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

  const editFarm = (id) => {
    setShowEditPopup(true);
    const curFarm = farms.filter(function (farm) {
      return farm._id === id;
    });
    setCurrentFarm(curFarm);
    setName(curFarm[0].name);
    setAddress(curFarm[0].phone);
    setZipcode(curFarm[0].email);
  };

  const editFarmRequest = () => {
    axios
      .put(
        `${url}/api/farmer/edit/${currentFarm[0]._id}`,
        {
          name: name,
          phone: address,
          email: zipcode,
          birthday: currentFarm[0].birthday,
          gender: currentFarm[0].gender,
          farm: currentFarm[0].farm,
          billingInformation: currentFarm[0].billingInformation,
          dateofissue: currentFarm[0].dateofissue,
          utilitybill: currentFarm[0].utilitybill,
          driverlicense: currentFarm[0].driverlicense,
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

  console.log("currentDrone", currentFarm);

  return (
    <>
      <Layout>
        <div className={styles["container"]}>
          {showEditPopup && (
            <div className={styles["modal"]}>
              <div className={styles["modal-content"]}>
                <form>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    placeholder="Email"
                  />
                  <button onClick={editFarmRequest}>Submit</button>
                </form>
              </div>
            </div>
          )}
          <div className={styles["body"]}>
            {/* <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            Farmer Management
                        </div>
                    </div> */}

            <div className={styles["table"]}>
              <div className={styles["title"]}>All Farmers</div>
              <div className={styles["display"]}>
                <table>
                  <tr>
                    <th>Farm ID#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>
                      <img src={FilterIcon} alt="filer" />
                    </th>
                  </tr>
                  {farms.map((farm, index) => {
                    return (
                      <tr key={farm._id}>
                        <td>{farm._id}</td>
                        <td>{farm.name}</td>
                        <td>{farm.phone}</td>
                        <td>{farm.email}</td>
                        <td className={styles["operations"]}>
                          <button>
                            <img src={EyeIcon} alt="View" />
                          </button>
                          <button onClick={() => deleteFarm(farm._id)}>
                            <img src={DeleteIcon} alt="delete" />
                          </button>
                          <button onClick={() => editFarm(farm._id)}>
                            <img src={EditIcon} alt="edit" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default FarmerManagement;
