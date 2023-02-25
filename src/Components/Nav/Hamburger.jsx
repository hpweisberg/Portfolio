
import styles from './Nav.module.css';
const Hamburger = ({ clickMenu, toggleNav }) => {

    

    return (
        <div className={styles.hamburger} onClick={clickMenu}>
            { !toggleNav 
            ? <>
              <span/>
              <span/>
              <span/>
              </>
            : <img/>}
        </div>
    )
}

export default Hamburger;
