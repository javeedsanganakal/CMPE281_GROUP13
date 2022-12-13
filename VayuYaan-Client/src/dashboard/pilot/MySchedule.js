import styles from '../dashboard.module.scss';
import Navbar from '../../common/navbar/Navbar';

function MySchedule()   {

    return (
        <>
            <Navbar />
            <div className={styles['container']}>
                
                <div className={styles['body']}>
                    <div className={styles['info-container']}>
                        <div className={styles['header']}>
                            My Schedule
                        </div>
                    </div>
                    <br/><br/>
                    <div className={styles['row']}>
                        <div className={styles['calendar']}>
                        <div className={styles["month"]}>      
                            <ul>
                                <li className={styles["prev"]}>&#10094;</li>
                                <li className={styles["next"]}>&#10095;</li>
                                <li>
                                August<br/>
                                <span>2021</span>
                                </li>
                            </ul>
                            </div>

                            <ul classNames={styles["weekdays"]}>
                            <li>Mo</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fr</li>
                            <li>Sa</li>
                            <li>Su</li>
                            </ul>

                            <ul className={styles["days"]}>  
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                            <li>9</li>
                            <li><span className={styles["active"]}>10</span></li>
                            <li>11</li>
                            <li>12</li>
                            <li>13</li>
                            <li>14</li>
                            <li>15</li>
                            <li>16</li>
                            <li>17</li>
                            <li>18</li>
                            <li>19</li>
                            <li>20</li>
                            <li>21</li>
                            <li>22</li>
                            <li>23</li>
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                            <li>29</li>
                            <li>30</li>
                            <li>31</li>
                            </ul>

                        </div>
                        <div className={styles['flights']}>
                            <div className={styles['upcoming-flights']}>
                                1
                            </div>
                            <div className={styles['availability']}>
                                2
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default MySchedule;