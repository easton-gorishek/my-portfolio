import React from 'react';
import styles from './about.module.css';

export default props => (
  <div className={styles.about} id={props.id}>
    <h1>Hi, I'm Easton. I'm a...</h1>
    <ul>
      <li>Coder</li>
      <li>Traveler</li>
      <li>Coffee addict</li>
    </ul>
    <p>Welcome to my page.</p>
  </div>
);
