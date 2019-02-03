import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styles from './header.scss';

const PageLink = props => (
  <li onClick={props.onClick} style={{ color: props.active }}>
    {/* <Link
      to={props.to}
      style={{ color: props.active }}
      replace
    >
      {props.children}
    </Link> */}
    {props.children}
  </li>
);

class Header extends PureComponent {
  state = {
    isFixed: false,
    navBarPos: 0,
    aboutPage: false,
    projectPage: false,
    contactPage: false
  };

  scrollToProjects = () => {
    const projectSection = document.getElementById('projects');
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToAbout = () => {
    const projectSection = document.getElementById('about');
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToContact = () => {
    const projectSection = document.getElementById('contact');
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  fixNav = () => {
    const { isFixed, navBarPos } = this.state;
    const windowPos = window.scrollY;
    const navBar = document.querySelector('nav').offsetTop;

    if(navBar > navBarPos) {
      this.setState({ navBarPos: navBar });
    }
    if(navBar - windowPos <= 0 && !isFixed) {
      this.setState({ isFixed: true });
    }
    else if(windowPos <= navBarPos && isFixed) {
      this.setState({ isFixed: false });
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
    const navBarHeight = document.querySelector('nav').clientHeight;
    const navBarPos = document.querySelector('nav').offsetTop;

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
    window.addEventListener('scroll', this.fixNav);
    window.addEventListener('scroll', this.currentPage);
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
        <div className='header-content'>Header Content</div>
        <div className={isFixed ? 'stick-nav' : null}>
          <nav>
            <h1>Easton Gorishek</h1>
            <ul>
              <PageLink active={aboutPage && 'red'} onClick={this.scrollToAbout}>About</PageLink>
              <PageLink active={projectPage && 'red'} onClick={this.scrollToProjects}>Projects</PageLink>
              <PageLink active={contactPage && 'red'} onClick={this.scrollToContact}>Contact</PageLink>
              <PageLink to='/blog'>Blog</PageLink>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
