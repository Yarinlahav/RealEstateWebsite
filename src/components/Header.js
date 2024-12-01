import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <img src="/Logo.png" alt="Logo" className={styles.logo} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/about"
            >
              אודות
              <span className={styles.navUnderline}></span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/contact"
            >
              יצירת קשר
              <span className={styles.navUnderline}></span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/OurProjects"
            >
              הפרויקטים שלנו
              <span className={styles.navUnderline}></span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/OurExpertise"
            >
              תחומי עיסוק
              <span className={styles.navUnderline}></span>
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              exact
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
              to="/"
              isActive={(match, location) => {
                console.log("Home Active?", match); // Debugging: Check if the match occurs
                return !!match;
              }}
            >
              עמוד הבית
              <span className={styles.navUnderline}></span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
