import Nav from "../Nav/Nav";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/"> React DB</a>
      <Nav />
    </header>
  );
};

export default Header;
