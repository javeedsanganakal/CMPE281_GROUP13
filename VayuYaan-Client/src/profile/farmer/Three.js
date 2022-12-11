import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';

import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

function Three()  {

    const [livestock, setLivestock] = useState(false);
    const [crops, setCrops] = useState(false);
    const [fruits, setFruits] = useState(false);
    const [nursery, setNursery] = useState(false);
    const [detail, setDetail] = useState('');
    const navigate = useNavigate()

        let user = JSON.parse(localStorage.getItem("user"));
        let flag = false;

        if (user?.role === "farmer") {
          flag = true;
        }

    const onSubmit = () => {
        let oneObj = cookies.get('farmer');

        let plot = {
            livestock,
            crops,
            fruits,
            nursery,
            detail
        }

        oneObj.farm.plot = plot;

        cookies.set('farmer', oneObj);
        console.log('farmer', cookies.get('farmer')); // Pacman

        window.location="/profile/farmer/4"
    }

    return (
      <>
        <Navbar logout={true} />
        <div className={styles["container"]}>
          <div>
            <Stepper steps={[{}, {}, {}, {}, {}, {}, {}]} activeStep={2} />
            <div className={styles["form-title"]}>Farm Information</div>
            <div className={styles["form-subtitle"]}>
              Fill more details about your farm.
            </div>

            <div className={styles["form-body"]}>
              <div className={styles["form-title"]}>Farm Plot</div>
              <div className={styles["input-check"]}>
                <div className={styles["plot-type"]}>Plot Type</div>
                <input
                  type="checkbox"
                  id="Livestock"
                  onChange={() => setLivestock(!livestock)}
                  name="Livestock"
                />
                <label for="Livestock">Livestock</label>

                <input
                  type="checkbox"
                  id="Crops"
                  onChange={() => setCrops(!crops)}
                  name="Crops"
                />
                <label for="Crops">Crops</label>

                <input
                  type="checkbox"
                  id="Fruits"
                  onChange={() => setFruits(!fruits)}
                  name="Fruits"
                />
                <label for="Fruits">Fruits</label>

                <input
                  type="checkbox"
                  id="Nursery"
                  onChange={() => setNursery(!nursery)}
                  name="Nursery"
                />
                <label for="Nursery">Nursery</label>
              </div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  onChange={(e) => setDetail(e.target.value)}
                  value={detail}
                  placeholder="Type (in detail)"
                />
              </div>
            </div>

            <div className={styles["navigate"]}>
              <div className={styles["navigate-btn"]}>
                <button
                  className={styles["grey"]}
                  onClick={() => navigate("/profile/farmer/2")}
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

export default Three;