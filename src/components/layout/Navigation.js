import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.css';

const PageLink = props => (
  <li className={props.active}>
    <Link
      to={props.to}
      className={props.active}
    >
      {props.children}
    </Link>
  </li>
);

class Navigation extends PureComponent {
  render() {
    const { pages, toggleMenu, menu } = this.props;

    return (
      <nav className={styles.navigation}>
        <h1>EASTON GORISHEK</h1>
        <ul className={styles.desktop}>
          <PageLink
            to="/#about"
            active={pages.about ? styles.active : null}
          >
            ABOUT
          </PageLink>
          <PageLink
            to="/#projects"
            active={pages.projects ? styles.active : null}
          >
            PROJECTS
          </PageLink>
          <PageLink
            to="/#contact"
            active={pages.contact ? styles.active : null}
          >
            CONTACT
          </PageLink>
          <Link
            to="/blog"
            activeStyle={{ borderBottom: '1px solid #EAC67A' }}
          >
            BLOG
          </Link>
        </ul>
        {menu
          ? <button
            className={styles.mobileMenu}
            onClick={toggleMenu}>&#x2715;</button>
          : <button
            className={styles.mobileMenu}
            onClick={toggleMenu}>&#9776;</button>
        }
      </nav>
    );
  }
};

export default Navigation;
