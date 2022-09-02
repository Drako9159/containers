import NavBar from "./NavBar";
import Footer from "./Footer";
import Container from "./Container";
import styles from "./FrontMinimal.module.css";

export default function FrontMinimal() {
  return (
    <div class={styles.container}>
      <NavBar />
      <Container />
      <Footer />
    </div>
  );
}
