import styles from "./Footer.module.css";
import dino from "./assets/dino.png";
import logo from "./assets/logo.png";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerSub}>
        <div>
          <h3>9023+</h3>
          <p>Collectibles</p>
        </div>
        <div>
          <h3>144ETH+</h3>
          <p>Auction</p>
        </div>
        <div>
          <h3>14k</h3>
          <p>Artists</p>
        </div>
      </div>

      <div className={styles.dino}>
        <div className={styles.dinoFront}>
          <img src={dino} alt="dino" />
        </div>
        <div className={styles.contextImg}>
          <img src={logo} alt="dino" />
          <h3>Space Aart</h3>
        </div>
      </div>
    </div>
  );
}
