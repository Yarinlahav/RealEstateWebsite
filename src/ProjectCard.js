import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css'; // Importing CSS module

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}> {/* Ensure this class is correct */}
      <Link to={`/projects/${project.id}`}>
        <div className={styles.imageContainer}>
          <img src={project.imageUrl} alt={project.name} className={styles.projectImage}/>
          <div className={styles.address}>{project.address}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
