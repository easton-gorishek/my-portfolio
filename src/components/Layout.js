import React from 'react';
import styles from './layout.module.css';

import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
    <Footer />
  </div>
);
