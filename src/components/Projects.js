import React from 'react';
import styles from './projects.module.css';

export default props => {
  return (
    <div className={styles.projects} id={props.id}>
      <p>Projects section</p>
    </div>
  );
};
