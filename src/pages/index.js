import React, { PureComponent } from 'react';
import './index.module.css';

import Layout from '../components/Layout.js';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';

class Index extends PureComponent {
  render() {
    return (
      <Layout>
        <About id="about"/>
        <Projects id="projects"/>
        <Contact id="contact"/>
      </Layout>
    );
  }
}

export default Index;
