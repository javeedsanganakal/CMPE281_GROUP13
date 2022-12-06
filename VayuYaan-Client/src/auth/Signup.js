import { useState } from 'react';
import styles from './auth.module.scss';
import "./auth.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Imgmain from "../Assets/img_signup_side.png"
import { url } from '../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"

function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
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

    const onSignUp = () => {
        axios.post(`${url}/api/user/signup`, {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            password: formData.password
        })
            .then(function (response) {
                console.log(response);
                toast.success(response.message);
            })
            .catch(function (error) {
                console.log(error);
                toast.error(error.message);
            });
    }
    console.log(formData)

    return (
        <div id='signup_main' className={styles['container']}>
            <ToastContainer />
            <div className={styles['banner']}>
                <img src={Imgmain} alt="Drone" />
            </div>
            <div className={styles['form']}>
                <div className={styles['header']}>
                    Sign Up
                </div>
                <div className={styles['input-field']}>
                    <div className={styles['input-item']}>
                        <input className={styles['input-item-1']} type="text" name="name" placeholder="&nbsp;&nbsp;&nbsp;Name" onChange={handleChange} value={formData.name} />
                    </div>
                    <div className={styles['input-item']}>
                        <input className={styles['input-item-2']} type="text" name="phone" placeholder="&nbsp;&nbsp;&nbsp;Phone" onChange={handleChange} value={formData.phone} />
                    </div>
                    <div className={styles['input-item']}>
                        <input className={styles['input-item-3']} type="text" name="email" placeholder="&nbsp;&nbsp;&nbsp;E-mail" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className={styles['input-item']}>
                        <input className={styles['input-item-4']} type="password" name="password" placeholder="&nbsp;&nbsp;&nbsp;Password" onChange={handleChange} value={formData.password} />
                    </div>
                    <div className={styles['input-button']}>
                        <Link className={styles['link']} to={"/profile"}>
                            {/* <button  onClick={() => window.location="/profile"}>Sign Up</button> */}
                            <button>Sign Up</button>
                        </Link>

                    </div>
                </div>
                <Link className={styles['link']} to={"/auth/login"}>
                <div className={styles['form-footer']} style={{ cursor: "pointer" }} >
                    Already have an account? Log in
                </div>
                </Link>
                {/* <div className={styles['form-footer']} style={{ cursor: "pointer" }} onClick={() => window.location = "/auth/login"}>
                    Already have an account? Log in
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

export default Signup;