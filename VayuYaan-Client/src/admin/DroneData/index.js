import React from "react";
import Layout from "../../components/layouts";
import styles from "./droneData.module.scss";
import DroneImaage from "../../Assets/drone-image.svg";
import Img from "./Images/image1.svg";
import Img2 from "./Images/image2.svg";
import Img3 from "./Images/image3.svg";
import Img4 from "./Images/image4.svg";
import Img5 from "./Images/image5.svg";
import Img6 from "./Images/image6.svg";
import Header from "../../components/header";





const DroneData = () => {
  const droneCards = [
    {
      id: "Drone ID #",
      number: 1,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
    },
    {
      id: "Drone ID #",
      number: 4,
      metrial: "DJI Phantom",
      image: DroneImaage,
      status: "Connected",
    },
  ];

  const ImgData = [
    {
      img: Img,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
    },
    {
      img: Img2,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
    },
    {
      img: Img3,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
    },
  ];

  const VidData = [
    {
      img: Img4,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
      duration: "Duration: 15 seconds",
    },
    {
      img: Img2,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
      duration: "Duration: 15 seconds",
    },
    {
      img: Img3,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
      duration: "Duration: 15 seconds",
    },
  ];

  const LidarData = [
    {
      img: Img5,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
    },
  ];

  const ComData = [
    {
      img: Img6,
      title: "Image at 10:00 AM",
      location: "Location:  (37.558381,-122.048111)",
    },
  ];

  return (
    <>
      <div>
        <Header />
        {/* <Layout> */}
          <div className={styles.couldDroneMap}>
            <div className={styles.homepageHeader}>Drone Booking</div>
            <div className={styles.droneDetailSection}>
              <div className={styles.simulatedDrone}>
                <div className={styles.simulatedDroneSec}>
                  Booking Schedules
                </div>
                <div className={styles.simulatedDroneSec}>Mission Planner</div>
                <div className={styles.simulatedDroneSec}>Pilot Management</div>
              </div>
            </div>
            <div className={styles.droneMap}>
              <div className={styles.cards}>
                {droneCards.map(({ id, number, metrial, image, status }) => {
                  return (
                    <div className={styles.card}>
                      <div className={styles.leftPart}>
                        <div className={styles.id}>{id}</div>
                        <div className={styles.number}>{number}</div>
                        <div className={styles.metrial}>{metrial}</div>
                      </div>
                      <div>
                        <img src={image} alt="drone-image" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.droneMap}>Drone ID #1</div>
            <div style={{ display: "flex", gap: "200px" }}>
              <div className={styles.leftPartDetail}>
                <div style={{ color: "#1A3447", fontWeight: "700" }}>
                  Service Details
                </div>
                <div>ID# 1144</div>
                <div>Status: Finished</div>
                <div className={styles.details}>
                  Service Type: Rental - Data Collection
                </div>
                <div>Time Start: 06/29/2022 10:00 am</div>
                <div>Time End: 06/29/2022, 5:00 pm</div>
                <div>Land: West Plot A - Crop</div>
                <div>Drone ID #1: DJI Mini SE</div>
              </div>
            </div>
            <div className={styles.collectionDiv}>
              <div className={styles.headerDiv}>Data Collection</div>
              <div className={styles.mainContent}>
                <div className={styles.subHeader}>
                  <div className={styles.nameDiv}>Image</div>
                  <div className={styles.outerBtn}>
                    <button>
                      <div>View More</div>
                    </button>
                  </div>
                </div>
                <div className={styles.ImagesMainDiv}>
                  {ImgData.map((e) => {
                    return (
                      <div className={styles.imageCard}>
                        <div className={styles.topSide}>
                          <img src={e.img} alt="images" />
                        </div>
                        <div className={styles.bottomSide}>
                          <div className={styles.title}>{e.title}</div>
                          <div className={styles.location}>{e.location}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.subHeader}>
                  <div className={styles.nameDiv}>Video</div>
                  <div className={styles.outerBtn}>
                    <button>
                      <div>View More</div>
                    </button>
                  </div>
                </div>
                <div className={styles.VideosMainDiv}>
                  {VidData.map((e) => {
                    return (
                      <div className={styles.imageCard}>
                        <div className={styles.topSide}>
                          <img src={e.img} alt="images" />
                        </div>
                        <div className={styles.bottomSide}>
                          <div className={styles.title}>{e.title}</div>
                          <div className={styles.location}>{e.location}</div>
                          <div className={styles.duration}>{e.duration}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.subHeader}>
                  <div className={styles.nameDiv}>Lidar</div>
                  <div className={styles.outerBtn}>
                    <button>
                      <div>View More</div>
                    </button>
                  </div>
                </div>
                <div className={styles.VideosMainDiv}>
                  {LidarData.map((e) => {
                    return (
                      <div className={styles.imageCard}>
                        <div className={styles.topSide}>
                          <img src={e.img} alt="images" />
                        </div>
                        <div className={styles.bottomSide}>
                          <div className={styles.title}>{e.title}</div>
                          <div className={styles.location}>{e.location}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.headerDiv}>
                Combined Near Infrared Images of Crop Field{" "}
              </div>
              <div className={styles.mainContent}>
                <div className={styles.ImagesMainDiv}>
                  {ComData.map((e) => {
                    return (
                      <div className={styles.imageCard}>
                        <div className={styles.topSide}>
                          <img src={e.img} alt="images" />
                        </div>
                        <div className={styles.bottomSide}>
                          <div className={styles.title}>{e.title}</div>
                          <div className={styles.location}>{e.location}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        {/* </Layout> */}
      </div>
    </>
  );
};

export default DroneData;
