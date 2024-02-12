import CustomLink from "../CustomLink/CustomLink";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <CustomLink to="/hooks">Hooks</CustomLink>
      <CustomLink to="/components">Components</CustomLink>
      <CustomLink to="/todo">ToDoApp</CustomLink>
    </nav>
  );
};

export default Nav;
