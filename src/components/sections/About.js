import React from 'react';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
  <div className={styles.about} id={props.id}>
    <section className={styles.intro}>
      <p>Hi, I'm Easton. I'm a...</p>
      <ul>
        <li><FontAwesomeIcon icon='code' /> Software Engineer</li>
        <li><FontAwesomeIcon icon='globe-americas' /> Traveler</li>
        <li><FontAwesomeIcon icon='coffee' /> Coffee addict</li>
      </ul>
    </section>
    <section className={styles.welcome}>
      <p className={styles.welcomeText}>Welcome to my page.</p>
      <p className={styles.peek}>Take a peek.</p>
      <p className={styles.downArrow}><FontAwesomeIcon icon='arrow-down' /></p>
    </section>
  </div>
);
