import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const menuLinks = () => {
    return (
      <ul>
        <li>
          <Link to="/" className={styles.links}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.links}>
            Store Policy
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.links}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.links}>
            Blogs
          </Link>
        </li>
      </ul>
    );
  };

  const controlsArea = () => {
    return (
      <button className={styles.logInBtn}>
        Log In
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faSignInAlt} />
        </span>
      </button>
    );
  };

  return (
    <div className={styles.mainNavWrapper}>
      <div>
        <Link to="/" className={styles.logo}>
          The Shop
        </Link>
      </div>
      <div className={styles.pageNavigation}>{menuLinks()}</div>
      <div className={styles.controlsArea}>{controlsArea()}</div>
    </div>
  );
};

export default NavBar;
