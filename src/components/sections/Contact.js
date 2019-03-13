import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
  <div className={styles.contact} id={props.id}>
    <p>LET'S CHAT <FontAwesomeIcon icon='coffee' /></p>
    <a href='mailto:ieaston26@gmail.com' title='email'>
      <FontAwesomeIcon className={styles.icons} icon='envelope' />
    </a>
    <a
      href='https://www.linkedin.com/in/easton-gorishek/'
      target='_blank'
      title='LinkedIn'>
      <FontAwesomeIcon className={styles.icons} icon={['fab', 'linkedin']} />
    </a>
    <a
      href='https://github.com/easton-gorishek'
      target='_blank'
      title='GitHub'>
      <FontAwesomeIcon className={styles.icons} icon={['fab', 'github']} />
    </a>
  </div>
);
