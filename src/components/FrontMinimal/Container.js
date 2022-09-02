import styles from "./Container.module.css";
import frontImage from "./assets/moon.png";
import stylesNave from "./NavBar.module.css";

export default function Container() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={frontImage} alt="front-image" />
      </div>
      <div className={styles.right}>
        <div className={styles.rightSub}>
          <h1>THE EASIEST PLACE TO INVEST YOUR NFTS</h1>
          <p>The NFT price depends on the result of specific external event</p>
          <div className={styles.drop}>
            <div className={stylesNave.buttonJump}>
              <div className={stylesNave.buttonText}>Explore</div>
              <div className={stylesNave.flecha}></div>
            </div>
            <div className={styles.dropSub}>
              <h4>Get Ready For Ilustration Art NFT Marketplace</h4>
              <p className={styles.nextNow}>Next Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
