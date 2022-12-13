import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';

import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

function Two()  {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const navigate = useNavigate();


      let user = JSON.parse(localStorage.getItem("user"));
      let flag = false;

      if (user?.role === "farmer") {
        flag = true;
      }

    const onSubmit = () => {
        let oneObj = cookies.get('farmer');

        let farm = {
            name,
            address,
            city,
            country,
            zipcode
        }

        oneObj.farm = farm;

        cookies.set('farmer', oneObj);
        console.log('farmer', cookies.get('farmer')); // Pacman

        window.location="/profile/farmer/3"
    }

    return (
      <>
        <Navbar logout={true} />
        <div className={styles["container"]}>
          <div>
            <Stepper steps={[{}, {}, {}, {}, {}, {}, {}]} activeStep={1} />
            <div className={styles["form-title"]}>Farm Information</div>
            <div className={styles["form-subtitle"]}>
              Fill in the data for your profile. It will only take a couple of
              minutes.
            </div>

            <div className={styles["form-body"]}>
              <div className={styles["form-title"]}>Farm address</div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
              </div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                />
              </div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  placeholder="Zip Code"
                />
              </div>
            </div>

            <div className={styles["navigate"]}>
              <div className={styles["navigate-btn"]}>
                <button
                  className={styles["grey"]}
                  onClick={() => navigate("/profile/farmer/1")}
                >
                  Back
                </button>
              </div>
              <div
                className={styles["navigate-btn"]}
                style={{ cursor: "pointer" }}
              >
                <button className={styles["blue"]} onClick={onSubmit}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Two;