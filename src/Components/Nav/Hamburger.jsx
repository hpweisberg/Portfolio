
import styles from './Nav.module.css';
const Hamburger = ({ clickMenu, toggleNav }) => {



    return (
        <div className={styles.hamburger} onClick={clickMenu}>
            {!toggleNav
                ? <>
                    <span />
                    <span />
                    <span />
                </>
                : 
                <div className={styles.closeX}>
                    <span />
                    <span />
                </div>
                }
        </div>
    )
}

export default Hamburger;
