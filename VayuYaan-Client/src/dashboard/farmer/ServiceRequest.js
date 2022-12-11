import styles from "../dashboard.module.scss";
import Navbar from "../../common/navbar/Navbar";
import SideBar from "../../components/sideBar";
import Layout from "../../components/layouts";

function ServiceRequest() {
  return (
    <>
      <div>
        <Layout>
          <div className={styles["body"]}>
            <div className={styles["info-container"]}>
              <div className={styles["header"]}>Service Reports!</div>
              <div className={styles["sub-header"]}>
                You can view your reports for finished services here.
              </div>
            </div>

            <div className={styles["table"]}>
              <div className={styles["title"]}>All Bookings</div>
              <div className={styles["display"]}>
                <table>
                  <tr>
                    <th>Service ID#</th>
                    <th>Farmland</th>
                    <th>Land Type</th>
                    <th>Service</th>
                    <th>Service Time</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>ID# 1111</td>
                    <td>West Plot A</td>
                    <td>Crop</td>
                    <td>Rental: Data Collection</td>
                    <td>06/29/2022</td>
                    <td>
                      <button>Finished</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default ServiceRequest;
