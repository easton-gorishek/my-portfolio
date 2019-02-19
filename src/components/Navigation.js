import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styles from './navigation.module.css';

const PageLink = props => (
  <li className={props.active}>
    <Link
      to={props.to}
      activeStyle={{ color: '#7dce94' }}
      className={props.active}
    >
      {props.children}
    </Link>
  </li>
);

class Navigation extends PureComponent {
  render() {
    const { pages, toggleMenu } = this.props;

    return (
      <nav className={styles.navigation}>
        <section>
          <h1>Easton Gorishek</h1>
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
            <PageLink
              to="/blog"
            >
              BLOG
            </PageLink>
          </ul>
          <button onClick={toggleMenu}>&#9776;</button>
        </section>
      </nav>
    );
  }
};

export default Navigation;
