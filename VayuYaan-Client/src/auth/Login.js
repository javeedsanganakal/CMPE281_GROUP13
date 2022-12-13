import { useState } from 'react';
import styles from './auth.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { url } from '../utils/constants';
import Imgmain from "../Assets/img_signup_side.png";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onLogin = () => {
        axios.post(`${url}/api/user/login`, {
            email: formData.email,
            password: formData.password
        })
            .then(function (response) {
                console.log(response);
                localStorage.setItem('user', JSON.stringify(response.data.data[0]))
                console.log('user', JSON.parse(localStorage.getItem('user')));
                if (response.data.data[0].role === "farmer") {
                    window.location = "/dashboard/farmer/myBookings";
                }
                if (response.data.data[0].role === "pilot") {
                    window.location = "/profile/pilot";
                }
                if (response.data.data[0].role === "admin") {
                    window.location = "/dashboard/drone/management";
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(formData)

    return (
        <div className={styles['container']}>
            <div className={styles['banner']}>
                <img src={Imgmain} alt="Drone" />
            </div>
            <div className={styles['form']}>
                <div className={styles['header']}>
                    Log In
                </div>
                <div className={styles['input-field']}>
                    <div className={styles['input-item']}>
                        <input type="text" className={styles['input-item-3']} name="email" onChange={handleChange} placeholder="E-mail" />
                    </div>
                    <div className={styles['input-item']}>
                        <input type="password" className={styles['input-item-4']} name="password" onChange={handleChange} placeholder="Password" />
                    </div>

                    <div className={styles['input-button']}>
                        <button onClick={onLogin}>Log in</button>
                    </div>
                </div>
                <Link className={styles['link']} to={"/auth/signup"}>
                    <div className={styles['form-footer']} style={{ cursor: "pointer" }}>
                        Don't have an account? Sign up
                    </div>
                    {/* <div className={styles['form-footer']} style={{cursor: "pointer"}} onClick={() => window.location="/auth/signup"}>
                    Don't have an account? Sign up
                </div> */}
                </Link>
                {/* 
                <div className={styles['google-auth']}>
                    <button><FontAwesomeIcon icon="fa-brands fa-google" />Log in with Google</button>
                </div> */}
                <div className={styles['google-auth']}>
                    <p className={styles['or_p']}>
                        <hr />
                        <b>or</b>
                        <hr />
                    </p>
                    <button>Sign up with Google</button>
                </div>
            </div>

        </div>
    )
}

export default Login;