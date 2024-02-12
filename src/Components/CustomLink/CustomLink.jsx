import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CustomLink.module.css";

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = !!useMatch(resolvedPath.pathname);
  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomLink;
