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
    menu: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkViewport);
  }

  toggleMenu = () => {
    const { menu } = this.state;
    this.setState({ menu: !menu }, this.updateScroll);
  }

  updateScroll = () => {
    const { menu } = this.state;
    const body = document.querySelector('body');

    if(menu) {
      body.style.overflowY = 'hidden';
      body.style.position = 'relative';
      document.ontouchmove = e => {
        e.preventDefault();
      };
    }
    else {
      body.style.overflowY = 'visible';
      body.style.position = 'initial';
      document.ontouchmove = e => {
        return true;
      };
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

  render() {
    const { menu } = this.state;
    const { pages } = this.props;

    return (
      <div id="header" className={styles.headerWrapper}>
        <header className={styles.header}>
          <div>
            <p></p>
          </div>
          <Navigation
            pages={pages}
            toggleMenu={this.toggleMenu}
          />
        </header>
        <section
          className={menu ? styles.menuOpen : styles.menuClosed}
          id="mobile-menu"
        >
          {menu &&
            <ul className={styles.menu}>
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
          }
        </section>
      </div>
    );
  }
};

export default Header;
