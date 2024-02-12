import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <a href="/hooks">Hooks</a>
      </li>
      <li>
        <a href="todo">Todo</a>
      </li>
    </ul>
  );
};

export default Nav;
