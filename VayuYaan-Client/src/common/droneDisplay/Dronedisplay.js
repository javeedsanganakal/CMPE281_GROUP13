import styles from './dronedisplay.module.scss';

function Dronedisplay()   {

    return (
        <div className={styles['drone']}>
            <div className={styles['row']}>
                <div>
                    <div className={styles['title']}>
                        title
                    </div>
                    <div className={styles['title']}>
                        title
                    </div>

                    <div className={styles['info']}>
                        info
                    </div>
                    <div className={styles['info']}>
                        info
                    </div>
                    <div className={styles['info']}>
                        info
                    </div>
                    <div className={styles['info']}>
                        info
                    </div>
                    
                </div>
                <img src="https://picsum.photos/100" />
            </div>

            <div className={styles['row']}>
                <div className={styles['rate']}>
                    $80/hour
                </div>
                <div className={styles['button']}>
                    <button>Select</button>
                </div>
            </div>
        </div>
    )
}

export default Dronedisplay;