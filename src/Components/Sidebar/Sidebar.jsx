import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const items = Array.from({ length: 10 }, (_, index) => `Item ${index + 1}`);

  return (
    <div className={styles.sidebar}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
