import React from 'react';
import styles from './about.module.css';

export default props => (
  <div className={styles.about} id={props.id}>
    <p>About section</p>
  </div>
);
