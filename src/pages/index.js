import React from 'react';
import './index.module.css';

import Layout from '../components/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default () => (
  <Layout>
    <About id="about"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
  </Layout>
);
