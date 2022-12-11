import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';

import { url } from '../../utils/constants';

import Cookies from 'universal-cookie';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const cookies = new Cookies();

function Six()  {

    const [agreementId, setAgreementId] = useState('');
    const [dateofsettlement, setDateofsettlement] = useState(new Date());
    const navigate = useNavigate();

        let user = JSON.parse(localStorage.getItem("user"));
        let flag = false;

        if (user?.role === "farmer") {
          flag = true;
        }

    const onSubmit = () => {
        let oneObj = cookies.get('farmer');

        let utilitybill = {
            agreementId,
            dateofsettlement
        }

        oneObj.utilitybill = utilitybill;

        cookies.set('farmer', oneObj);
        console.log('farmer', cookies.get('farmer')); // Pacman

        localStorage.setItem('user', JSON.stringify({
            email: oneObj.email,
            role: 'farmer'
        }))
        
        axios.post(`${url}/api/farmer/create`, {
            name: oneObj.name,
            phone: oneObj.phone,
            email: oneObj.email,
            birthday : oneObj.birthday,
            gender : oneObj.gender,
            farm: oneObj.farm,
            billingInformation: oneObj.billingInformation,
            utilitybill: oneObj.utilitybill
        }, {
            "Content-Type": "application/json",
        })
            .then(function (response) {
                console.log(response);
                alert(response.data.message);
                window.location = "/profile/farmer"
            })
            .catch(function (error) {
                console.log(error);
                alert("error")
            });
        
    }

    return (
      <>
        <Navbar logout={true} />
        <div className={styles["container"]}>
          <div>
            <Stepper steps={[{}, {}, {}, {}, {}, {}, {}]} activeStep={6} />
            <div className={styles["form-title"]}>
              Let's verify your farm operation.
            </div>
            <div className={styles["form-subtitle"]}>
              Please submit a copy of your farm's utility bill. This can be an
              electric bill, or alternatively a water bill.
            </div>

            <div className={styles["form-body"]}>
              <div className={styles["form-title"]}>Farm Utility Bill</div>

              <div className={styles["row"]}>
                <div className={styles["input-field"]}>
                  <input
                    type="text"
                    value={agreementId}
                    onChange={(e) => setAgreementId(e.target.value)}
                    placeholder="Statement Agreement ID"
                  />
                </div>
                <div className={styles["input-field"]}>
                  <input
                    type="date"
                    value={dateofsettlement}
                    onChange={(e) => setDateofsettlement(e.target.value)}
                    placeholder="Date of bill statement"
                  />
                </div>
              </div>
            </div>

            {/* <Upload text={'Upload pdf/image of utility bill'} /> */}

            <div className={styles["navigate"]}>
              <div className={styles["navigate-btn"]}>
                <button
                  className={styles["grey"]}
                  onClick={() => navigate("/profile/farmer/5")}
                >
                  Back
                </button>
              </div>
              <div
                className={styles["navigate-btn"]}
                style={{ cursor: "pointer" }}
              >
                <button className={styles["blue"]} onClick={onSubmit}>
                  Create Farmer
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Six;