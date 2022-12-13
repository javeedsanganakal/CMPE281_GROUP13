import React from "react";

import Layout from "../../../../components/layouts";
import { Form, Button, Input } from 'antd';
import styles from "./CreateSimulationDrone.module.scss";


  function CreateSimulationDrone() {
    return (
      <div>
        <Layout>
          <div className={styles.homePageContainer}>
            <div className={styles.homepageHeader}>
              Create a Simulated Drone
            </div>
            <div className={styles.droneDetailSection}>
              <div>
                <div className={styles.upcomingBookService}>
                  <div className={styles.upcomingBook}> 1 </div>
                  <div className={styles.upcomingBookWrap}>
                    Upcoming booked service
                  </div>
                </div>
              </div>
            </div>    
          </div>
        <div className={styles.createDroneForm}>
        <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            {/* <h4>ReactJS Ant-Design Form Component</h4> */}
            <Form
                name="basicform"
                onFinishFailed={() => alert('Failed to submit')}
                onFinish={() => alert('Form Submitted')}
                initialValues={{ remember: true }}
            >
             <Form.Item
              label="Drone Id"
              name="droneID"
              rules={[{ required: true, message: 'Please enter drone Id' }]}
             >
              <Input />
             </Form.Item>
             <Form.Item
              label="Drone Model"
              name="droneModel"
              rules={[{ required: true, message: 'Please enter drone model' }]}
             >
              <Input />
             </Form.Item>
             <Form.Item
              label="Mission Plan Id"
              name="missionPlanId"
              rules={[{ required: true, message: 'Please enter mission plan Id' }]}
             >
              <Input />
             </Form.Item>
             <Form.Item>
              <Button type="success" htmlType="submit" style={{backgroundColor:"#5DB075", borderRadius:15, width: 200,
height: 60}}
        onClick={() => {window.location = "/dashboard/farmer/dronesimulation/confirm"}}
>
               Create Drone
              </Button>
             </Form.Item>
            </Form>
        </div>
        </div>
        
        </Layout>
      </div>
    );
  }
  
  export default CreateSimulationDrone;
