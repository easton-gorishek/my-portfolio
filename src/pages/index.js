import React, { PureComponent } from 'react';
import './index.module.css';

import Layout from '../components/layout/Layout.js';
import About from '../components/sections/About.js';
import Projects from '../components/sections/Projects.js';
import Contact from '../components/sections/Contact.js';

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
