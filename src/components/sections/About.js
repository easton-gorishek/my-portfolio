import React from 'react';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
  <div className={styles.about} id={props.id}>
    <ul>
      <li id={styles.softwareEngineer}><FontAwesomeIcon icon='code' /> Software Engineer</li>
      <li id={styles.traveler}><FontAwesomeIcon icon='globe-americas' /> Traveler</li>
      <li id={styles.coffee}><FontAwesomeIcon icon='coffee' /> Coffee Addict</li>
    </ul>
  </div>
);
