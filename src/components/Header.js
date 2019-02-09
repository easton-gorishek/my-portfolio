import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';

const PageLink = props => (
  <li className={props.active}>
    <Link
      to={props.to}
      activeStyle={{ color: 'red' }}
    >
      {props.children}
    </Link>
  </li>
);

class Header extends PureComponent {
  state = {
    isFixed: false,
    navBarPos: 0,
    aboutPage: false,
    projectPage: false,
    contactPage: false,
  };

  fixNav = () => {
    const { isFixed, navBarPos } = this.state;

    const windowPos = window.scrollY;
    const navBar = document.querySelector('nav');
    const navBarOffSet = navBar.offsetTop;
    const myName = document.querySelector('.' + styles.myName);

    if(navBarOffSet > navBarPos) {
      this.setState({ navBarPos: navBarOffSet });
    }
    if((navBarOffSet - windowPos) <= 0 && !isFixed) {
      this.setState({ isFixed: true });
      if(window.innerWidth > 850) {
        myName.style.display = 'block';
        myName.animate([
          { transform: 'translateX(-100%)' },
          { transform: 'initial' }
        ], {
          duration: 500,
          easing: 'linear'
        });
        navBar.style.justifyContent = 'space-between';
      }
    }
    else if(windowPos <= navBarPos && isFixed) {
      this.setState({ isFixed: false });
      myName.animate([
        { transform: 'initial' },
        { transform: 'translateX(-150%)' }
      ], {
        duration: 500,
        easing: 'linear'
      });
      setTimeout(() => {
        myName.style.display = 'none';
        navBar.style.justifyContent = 'flex-end';
      }, 500);
    }
  }

  navBar = () => {
    const navBar = document.querySelector('nav');
    const myName = document.querySelector('.' + styles.myName);

    if(window.innerWidth < 850) {
      myName.style.display = 'none';
      navBar.style.justifyContent = 'flex-end';
    }
  }

  currentPage = () => {
    const {
      aboutPage,
      projectPage,
      contactPage,
    } = this.state;

    const aboutOffset = document.getElementById('about').offsetTop;
    const projectOffset = document.getElementById('projects').offsetTop;
    const contactOffset = document.getElementById('contact').offsetTop;
    const windowPos = window.scrollY;
    const navBar = document.querySelector('nav');
    const navBarHeight = navBar.clientHeight;
    const navBarPos = navBar.offsetTop;

    const aboutPosition = (aboutOffset - navBarHeight) - windowPos;
    const projectPosition = (projectOffset - navBarHeight) - windowPos;
    const contactPosition = (contactOffset - navBarHeight) - windowPos;

    if(windowPos < navBarPos) {
      this.setState({
        aboutPage: false,
        projectPage: false,
        contactPage: false
      });
    }

    if((aboutPosition <= 0 && !aboutPage) && projectPosition > 0) {
      this.setState({
        aboutPage: !aboutPage,
        projectPage: false,
        contactPage: false
      });
    }
    if((projectPosition <= 0 && !projectPage) && contactPosition > 0) {
      this.setState({
        projectPage: !projectPage,
        aboutPage: false,
        contactPage: false
      });
    }
    if(contactPosition <= 0 && !contactPage) {
      this.setState({
        contactPage: !contactPage,
        projectPage: false,
        aboutPage: false
      });
    }
  }

  componentDidMount() {
    if(window.location.pathname !== '/blog') {
      window.addEventListener('scroll', this.currentPage);
    }
    window.addEventListener('scroll', this.fixNav);
    window.addEventListener('resize', this.navBar);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.currentPage);
    window.removeEventListener('scroll', this.fixNav);
    window.removeEventListener('resize', this.navBar);
  }

  render() {
    const {
      isFixed,
      aboutPage,
      projectPage,
      contactPage
    } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>Header Content</div>
        <div className={isFixed ? styles.stickNav : null}>
          <nav>
            <h1 className={styles.myName}>Easton Gorishek</h1>
            <ul>
              <PageLink
                active={aboutPage ? styles.active : null}
                to="/#about"
              >
               About
              </PageLink>
              <PageLink
                active={projectPage ? styles.active : null}
                to="/#projects"
              >
                Projects
              </PageLink>
              <PageLink
                active={contactPage ? styles.active : null}
                to="/#contact"
              >
                Contact
              </PageLink>
              <PageLink
                to="/blog"
              >
                Blog
              </PageLink>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
