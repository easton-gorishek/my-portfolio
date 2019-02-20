import React, { PureComponent } from 'react';
import Navigation from './Navigation.js';
import styles from './header.module.css';

const MenuOption = props => (
  <li className={props.active}>
    <a
      href={props.to}
      onClick={props.onClick}
      className={props.active}
    >
      {props.children}
    </a>
  </li>
);

class Header extends PureComponent {
  state = {
    menu: false,
    navFixed: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkViewport);
    window.addEventListener('scroll', this.fixNav);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fixNav);
    window.removeEventListener('resize', this.checkViewport);
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({ menu: !menu }, this.toggleScroll);
  }

  toggleScroll = () => {
    const { menu } = this.state;
    const body = document.querySelector('body');

    if(menu) {
      body.style.overflowY = 'hidden';
      body.style.position = 'relative';
    }
    else {
      body.style.overflowY = 'visible';
      body.style.position = 'initial';
    }
  }

  checkViewport = () => {
    const windowSize = window.innerWidth;
    const body = document.querySelector('body');

    if(windowSize > 850) {
      this.setState({ menu: false });
    }

    body.style.overflowY = 'visible';
    body.style.position = 'initial';
    document.ontouchmove = e => {
      return true;
    };
  }

  fixNav = () => {
    const { navFixed } = this.state;

    const navBar = document.querySelector('nav');
    const navBarPos = navBar.getBoundingClientRect();
    const header = document.querySelector('header');
    const headerPos = header.getBoundingClientRect();

    if(navBarPos.top <= 0 && !navFixed) {
      this.setState({ navFixed: !navFixed });
    }
    if(headerPos.bottom >= navBarPos.bottom && navFixed) {
      this.setState({ navFixed: !navFixed });
    }
  }

  render() {
    const { menu, navFixed } = this.state;
    const { pages } = this.props;

    return (
      <header className={styles.header}>
        <div>
          <p></p>
        </div>
        <div id={styles.nav} className={navFixed ? styles.navWrapper : null}>
          <Navigation
            pages={pages}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <section
          className={menu ? styles.menuOpen : styles.menuClosed}
        >
          <ul className={styles.menuOptions}>
            <MenuOption
              onClick={this.toggleMenu}
              to="/#about"
              active={pages.about ? styles.active : null}
            >
              ABOUT
            </MenuOption>
            <MenuOption
              onClick={this.toggleMenu}
              to="/#projects"
              active={pages.projects ? styles.active : null}
            >
              PROJECTS
            </MenuOption>
            <MenuOption
              onClick={this.toggleMenu}
              to="/#contact"
              active={pages.contact ? styles.active : null}
            >
              CONTACT
            </MenuOption>
            <MenuOption
              to="/blog"
            >
              BLOG
            </MenuOption>
          </ul>
        </section>
      </header>
    );
  }
};

export default Header;
