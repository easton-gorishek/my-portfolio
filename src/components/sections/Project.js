import React from 'react';
import styles from './project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => {
  const { project, activeProject } = props;

  return (
    <section
      className={activeProject === project.title ? styles.project : styles.hide }
    >
      <h2 className={styles.title}>{project.title.toUpperCase()}</h2>
      <section className={styles.tech}>
        {project.tech.map((item, i) => (
          <p key={i}>{item.toUpperCase()}</p>
        ))}
      </section>
      <p className={styles.projectDescription}>{project.description}</p>
      <img src={project.image.file.url}/>
      <section className={styles.links}>
        <a
          target='_blank'
          href={project.github}>
          <FontAwesomeIcon className={styles.icons} icon={['fab', 'github']} />
          GITHUB
        </a>
        <a
          target='_blank'
          href={project.website}><FontAwesomeIcon className={styles.icons} icon='desktop' />
          WEBSITE
        </a>
      </section>
    </section>
  );
};
