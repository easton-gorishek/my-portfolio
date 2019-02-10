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
    aboutPage: false,
    projectPage: false,
    contactPage: false,
    myName: 'myName',
    pathname: '/'
  };

  fixNav = () => {
    const { isFixed } = this.state;

    const navBar = document.querySelector('nav');
    const navBarRect = navBar.getBoundingClientRect();
    const header = document.querySelector('header');
    const headerRect = header.getBoundingClientRect();
    const myName = document.querySelector('h1');

    if((navBarRect.top <= 0) && !isFixed) {
      this.setState({
        isFixed: true,
        myName: 'myName'
      });
      if(window.innerWidth > 850) {
        myName.style.display = 'block';
        navBar.style.justifyContent = 'space-between';
      }
    }
    else if((headerRect.bottom >= navBarRect.bottom) && isFixed) {
      this.setState({ isFixed: false });
    }
    else if(headerRect.top === 0) {
      if(window.innerWidth > 850) {
        this.setState({ myName: 'myNameOut' });
        setTimeout(() => {
          myName.style.display = 'none';
          navBar.style.justifyContent = 'flex-end';
        }, 500);
      }
    }
  }

  mobileNavBar = () => {
    const navBar = document.querySelector('nav');
    const myName = document.querySelector('h1');

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

    const windowPos = window.scrollY;
    const aboutOffset = document.getElementById('about').offsetTop;
    const projectOffset = document.getElementById('projects').offsetTop;
    const contactOffset = document.getElementById('contact').offsetTop;
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

    if((aboutPosition < 0 && !aboutPage) && (projectPosition > 0)) {
      this.setState({
        aboutPage: !aboutPage,
        projectPage: false,
        contactPage: false
      });
    }
    if((projectPosition < 0 && !projectPage) && (contactPosition > 0)) {
      this.setState({
        projectPage: !projectPage,
        aboutPage: false,
        contactPage: false
      });
    }
    if(contactPosition < 0 && !contactPage) {
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
    window.addEventListener('resize', this.mobileNavBar);
    window.addEventListener('scroll', this.fixNav);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.mobileNavBar);
    window.removeEventListener('scroll', this.fixNav);
    window.removeEventListener('scroll', this.currentPage);
  }

  componentDidUpdate() {
    const { pathname } = this.state;
    const currentPath = window.location.pathname;
    if((currentPath === '/blog') && (pathname !== '/blog')) {
      this.setState({
        pathname: currentPath,
        myName: 'myName'
      });
    }
  }

  render() {
    const {
      isFixed,
      aboutPage,
      projectPage,
      contactPage,
      myName
    } = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <p>Header Content</p>
        </div>
        <div className={isFixed ? styles.stickNav : null}>
          <nav>
            <h1 className={styles[myName]}>Easton Gorishek</h1>
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
