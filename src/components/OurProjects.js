import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectCard from '../ProjectCard';
import styles from './OurProjects.module.css'; // Importing CSS module for styling
import A from '../Content/A.png'
import B from '../Content/B.png'
import C from '../Content/C.png'
import D from '../Content/D.png'
import E from '../Content/E.png'
import F from '../Content/F.png'

function OurProjects() {
  // Example project data (you should replace this with actual data perhaps fetched from an API)
  const projects = [
    { id: 1, name: 'Project A', imageUrl: A, address: '1234 Main St' },
    { id: 2, name: 'Project B', imageUrl: B, address: '5678 Elm St' },
    { id: 3, name: 'Project C', imageUrl: C, address: '91011 Maple St' },
    { id: 4, name: 'Project D', imageUrl: D, address: '1213 Oak St' },
    { id: 5, name: 'Project E', imageUrl: E, address: '1415 Cedar St' },
    { id: 6, name: 'Project F', imageUrl: F, address: '1617 Pine St' }
  ];

  return (
    <div className={styles.ourProjects}>
        <Helmet>
        <title>Our Projects - Lahav Group | Transforming Real Estate in Israel</title>
        <meta name="description" content="Explore the groundbreaking projects led by Lahav Group across Israel. From residential developments to commercial spaces, discover how we transform ideas into reality, delivering exceptional value and quality." />
        </Helmet>

      <h1 className={styles.h1}>Our Projects</h1>
      <h2 className={styles.h2}>הפרויקטים שלנו </h2>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default OurProjects;
