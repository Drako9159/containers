import styles from "./NavBar.module.css";
import logoImage from "./assets/logo.png";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logoImage} alt="logo" />
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className={styles.buttonJump}>
        <div className={styles.buttonText}>Connect Wallet</div>
        <div className={styles.flecha}></div>
      </div>
    </div>
  );
}
