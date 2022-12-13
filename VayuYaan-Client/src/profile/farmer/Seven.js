        import Navbar from '../../common/navbar/Navbar';
import styles from '../profile.module.scss';
import { Stepper } from 'react-form-stepper';
import Upload from '../../common/upload/Upload';
import { useNavigate } from 'react-router-dom';

function Seven()  {
        let user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

        let flag = false;

        if (user?.role === "farmer") {
          flag = true;
        }

    return (
      <>
        <Navbar logout={true} />
        <div className={styles["container"]}>
          <div>
            <Stepper steps={[{}, {}, {}, {}, {}, {}, {}]} activeStep={7} />
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
                  <input type="text" placeholder="Name" />
                </div>
                <div className={styles["input-field"]}>
                  <input type="text" placeholder="License ID" />
                </div>
              </div>
            </div>

            {/* <Upload text={'Upload pdf/image of license'} /> */}

            <div className={styles["navigate"]}>
              <div className={styles["navigate-btn"]}>
                <button
                  className={styles["grey"]}
                  onClick={() => navigate("/profile/farmer/6")}
                >
                  Back
                </button>
              </div>
              <div
                className={styles["navigate-btn"]}
                style={{ cursor: "pointer" }}
                onClick={() => console.log()}
              >
                <button className={styles["blue"]}>Create Farmer</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Seven;