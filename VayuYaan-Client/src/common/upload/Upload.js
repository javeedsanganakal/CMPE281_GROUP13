import styles from './upload.module.scss';

function Upload({
    text
})   {

    return (
        <div className={styles['container']}>
            {text}
        </div>
    )
}

export default Upload;