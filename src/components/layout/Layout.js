import React, { PureComponent } from 'react';
import styles from './layout.module.css';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faDesktop,
  faCoffee,
  faCode,
  faGlobeAmericas,
  faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Header from './Header.js';
import Footer from './Footer.js';

config.autoAddCss = false;

library.add(
  fab,
  faEnvelope,
  faDesktop,
  faCoffee,
  faCode,
  faGlobeAmericas,
  faArrowDown
);

class Layout extends PureComponent {
  state = {
    pages: {
      about: false,
      projects: false,
      contact: false
    }
  }

  componentDidMount() {
    if(window.location.pathname !== '/blog') {
      window.addEventListener('scroll', this.currentPage);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.currentPage);
  }

  currentPage = () => {
    const { pages } = this.state;

    if(window.location.pathname !== '/blog') {
      const aboutPage = document.getElementById('about').getBoundingClientRect();
      const projectsPage = document.getElementById('projects').getBoundingClientRect();
      const contactPage = document.getElementById('contact').getBoundingClientRect();
      const navBar = document.querySelector('nav').getBoundingClientRect();

      const aboutPosition = aboutPage.top - navBar.height;
      const projectsPosition = projectsPage.top - navBar.height;
      const contactPosition = contactPage.top - navBar.height;

      if(navBar.top > 0 && (pages.about || pages.projects || pages.contact)) {
        this.setState({
          pages: {
            about: false,
            projects: false,
            contact: false
          }
        });
      }

      if((aboutPosition <= 0 && !pages.about) && (projectsPosition > 0)) {
        this.setState({
          pages: {
            about: true,
            projects: false,
            contact: false
          }
        });
      }
      if((projectsPosition <= 0 && !pages.projects) && (contactPosition > 0)) {
        this.setState({
          pages: {
            about: false,
            projects: true,
            contact: false
          }
        });
      }
      if(contactPosition <= 0 && !pages.contact) {
        this.setState({
          pages: {
            about: false,
            projects: false,
            contact: true
          }
        });
      }
    };
  }

  render() {
    const { children } = this.props;
    const { pages } = this.state;

    return (
      <div className={styles.layout}>
        <Header pages={pages}/>
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
