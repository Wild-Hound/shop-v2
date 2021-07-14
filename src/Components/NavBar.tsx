import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  // hides navbar is desktop view
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      const event = e.target as Window;
      const temp = document.getElementById(styles.submenu);
      if (event.innerWidth > 800) {
        temp!.style.display = "none";
      }
    });
  }, []);

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

  const responsileBtn = () => {
    return (
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
    );
  };

  const responsiveBtnAct = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const temp = document.getElementById(styles.submenu);

    if (temp!.style.display !== "flex") {
      temp!.style.display = "flex";
    } else {
      temp!.style.display = "none";
    }
  };

  return (
    <>
      <div className={styles.mainNavWrapper}>
        <div>
          <Link to="/" className={styles.logo}>
            The Shop
          </Link>
        </div>
        <div className={styles.pageNavigation}>{menuLinks()}</div>
        <div className={styles.controlsArea}>{controlsArea()}</div>
        <div className={styles.responsiveBtn} onClick={responsiveBtnAct}>
          {responsileBtn()}
        </div>
      </div>
      <div id={styles.submenu}>
        {menuLinks()}
        {controlsArea()}
      </div>
    </>
  );
};

export default NavBar;
