
import styles from './Nav.module.css';
const Hamburger = ({ clickMenu }) => {

    return (
        <div className={styles.hamburger} onClick={clickMenu}>
            <span/>
            <span/>
            <span/>
        </div>
    )
}

export default Hamburger;
