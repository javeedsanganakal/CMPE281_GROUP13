import Navbar from "../../common/navbar/Navbar";
import styles from "../profile.module.scss";
import { Stepper } from "react-form-stepper";

import Cookies from "universal-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

function Three() {
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();


  const onSubmit = () => {
    let oneObj = cookies.get("pilot");

    let billingInformation = {
      name,
      cardnumber,
      expiration,
      cvv,
    };

    oneObj.billingInformation = billingInformation;

    cookies.set("pilot", oneObj);
    console.log("pilot", cookies.get("pilot")); // Pacman

    window.location = "/profile/pilot/4";
  };

  return (
    <>
      <div className={styles["container"]}>
        <Navbar logout={true} />

        <div>
          <Stepper steps={[{}, {}, {}, {}]} activeStep={2} />
          <div className={styles["form-title"]}>Billing Information</div>
          <div className={styles["form-subtitle"]}>
            Fill in billing information for your profile.
          </div>

          <div className={styles["form-body"]}>
            <div className={styles["form-title"]}>Payment Method</div>
            <div className={styles["input-field"]}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name on Card"
              />
            </div>
            <div className={styles["input-field"]}>
              <input
                type="text"
                value={cardnumber}
                onChange={(e) => setCardnumber(e.target.value)}
                placeholder="Card Number"
              />
            </div>

            <div className={styles["row"]}>
              <div className={styles["input-field"]}>
                <input
                  type="date"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  placeholder="Expiration"
                />
              </div>
              <div className={styles["input-field"]}>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="CVV"
                />
              </div>
            </div>

            <div className={styles["form-footer"]}>
              By Clicking “Confirm Payment” I agree to the companies term of
              services
            </div>
          </div>

          <div className={styles["navigate"]}>
            <div className={styles["navigate-btn"]}>
              <button
                className={styles["grey"]}
                onClick={() => navigate("/profile/pilot/2")}
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
