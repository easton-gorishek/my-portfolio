import React, { useState } from 'react';
import Project from './Project.js';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './projects.module.css';

export default props => {
  const { allContentfulProjects } = useStaticQuery(graphql`
  query projectsQuery {
    allContentfulProjects {
      edges {
        node {
          title,
          description,
          website,
          github,
          image {
            file {
              url
            }
          },
          tech
        }
      }
    }
  }
  `);
  const [ activeProject, setActiveProject ] = useState(allContentfulProjects.edges[0].node.title);

  return (
    <div className={styles.projects} id={props.id}>
      <ul className={styles.projectsList}>
        <h3>PROJECTS</h3>
        {allContentfulProjects.edges.map((project, i) => (
          <li
            onClick={() => setActiveProject(project.node.title)}
            key={i}
            className={activeProject === project.node.title ? styles.active : null}
          >
            {project.node.title.toUpperCase()}
          </li>
        ))}
      </ul>
      <div>
        {allContentfulProjects.edges.map((project, i) => (
          <Project
            activeProject={activeProject}
            key={i}
            project={project.node}
          />
        ))}
      </div>
    </div>
  );
};
