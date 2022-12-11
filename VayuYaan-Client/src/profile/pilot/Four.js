import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import axios from 'axios';
import { url } from '../../utils/constants';

import Cookies from 'universal-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

function Four()  {

    const [name, setName] = useState('');
    const [licenseid, setLicenseid] = useState('');
  const navigate = useNavigate();


    const onSubmit = () => {
        let oneObj = cookies.get('pilot');

        let driverlicense = {
            name,
            licenseid
        }

        oneObj.driverlicense = driverlicense;

        cookies.set('pilot', oneObj);
        console.log('pilot', cookies.get('pilot')); // Pacman

        localStorage.setItem('user', JSON.stringify({
            email: oneObj.email,
            role: 'pilot',
        }))

        axios.post(`${url}/api/pilot/create`, {
            name: oneObj.name,
            phone: oneObj.phone,
            email: oneObj.email,
            birthday : oneObj.birthday,
            gender : oneObj.gender,
            certificate: oneObj.certificate,
            billingInformation: oneObj.billingInformation,
            driverlicense: oneObj.driverlicense
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                alert(response.data.message);
                window.location = "/profile/pilot"
            })
            .catch(function (error) {
                console.log(error);
                alert("error")
            });

    }


    return (
      <>
        <div className={styles["container"]}>
          <Navbar logout={true} />

          <div>
            <Stepper steps={[{}, {}, {}, {}]} activeStep={4} />
            <div className={styles["form-title"]}>
              Let's verify your identity.
            </div>
            <div className={styles["form-subtitle"]}>
              Please upload your driver's license.
            </div>

            <div className={styles["form-body"]}>
              <div className={styles["form-title"]}>Driver's License</div>

              <div className={styles["row"]}>
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
                    value={licenseid}
                    onChange={(e) => setLicenseid(e.target.value)}
                    placeholder="License ID"
                  />
                </div>
              </div>
            </div>

            {/* <Upload text={'Upload pdf/image of license'} /> */}

            <div className={styles["navigate"]}>
              <div className={styles["navigate-btn"]}>
                <button
                  className={styles["grey"]}
                  onClick={() => navigate("/profile/pilot/3")}
                >
                  Back
                </button>
              </div>
              <div className={styles["navigate-btn"]}>
                <button
                  className={styles["blue"]}
                  style={{ cursor: "pointer" }}
                  onClick={onSubmit}
                >
                  Create Pilot
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Four;