import styles from './dropdownbar.module.scss';

function DropdownBar()   {

    return (
        <div className={styles['bar']}>

            <select name="cars" id="cars" className={styles['item']}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

            <select name="cars" id="cars" className={styles['item']}>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>

        </div>
    )
}

export default DropdownBar;