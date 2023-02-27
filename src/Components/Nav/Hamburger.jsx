
import styles from './Nav.module.css';
const Hamburger = ({ clickMenu, toggleNav }) => {



    return (
        <div className={styles.hamburger} onClick={clickMenu}>
                <>
                    <span />
                    <span />
                    <span />
                </>
                
            {/* {!toggleNav
                ? <>
                    <span />
                    <span />
                    <span />
                </>
                : 
                <div className={styles.hamburger}>
                    <span />
                    <span />
                    <span />
                </div>
                } */}
        </div>
    )
}

export default Hamburger;
