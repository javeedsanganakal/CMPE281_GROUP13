import styles from './navbar.module.scss';
import {useNavigate} from 'react-router-dom'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Navbar({logout})   {

    const navigate = useNavigate()
    console.log(logout, "llll")
    const onLogout = () => {
        localStorage.removeItem('user')
        cookies.remove('pilot')
        cookies.remove('farm')
        cookies.remove('farmer')
        window.location = "/auth/login"
    }

    const goHome = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(logout){
        navigate("/");
        }
    }

    const goProfile = () => {
        const user = JSON.parse(localStorage.getItem('user'));

    }

    return (
        <div className={styles['navbar']}>
            <div className={styles['nav-links']}>
                <div className={styles['nav-item']} style={{cursor: "pointer"}} onClick={goHome}>
                    Home
                </div>
                <div className={styles['nav-item']}>
                    Contact
                </div>
                <div className={styles['nav-item']} onClick={goProfile}>
                    Profile
                </div>

                {!logout &&
                    <div className={styles['nav-item']} style={{cursor: "pointer"}}>
                    <button className={styles['nav-item']} style={{background: "none", border: "none"}} onClick={onLogout}>Logout</button>
                </div>
                }
            </div>
            
            
        </div>
    )
}

export default Navbar;