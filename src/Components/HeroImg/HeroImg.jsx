import styles from './HeroImg.module.css'
import { myImg } from '../../data/img'

const HeroImg = ({ title }) => {
  return ( 
    <>
        <div className={styles.heroImg} title={title}>
        </div>
      </>
      );
}

      export default HeroImg;