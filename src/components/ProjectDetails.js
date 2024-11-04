import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './ProjectDetails.module.css';
import A from '../Content/A.png';
import B from '../Content/B.png';
import C from '../Content/C.png';
import D from '../Content/D.png';
import E from '../Content/E.png';
import F from '../Content/F.png';
import GlilYam2 from '../Content/GlilYam2.png';
import GlilYam from '../Content/GlilYam.png';
import Rananan1 from '../Content/Ranan1.png'
import Rananan from '../Content/Rananan.png'

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  const projects = [
    { id: 1, name: 'אלופי צהל חולון', imageUrl: A, address: '1234 Main St', architect: 'גל אור פישביין', developer: 'קרדן נדל"ן', units: 120, floors: 12 },
    { id: 2, name: 'ההסתדרות חולון', imageUrl: B, address: '1234 Main St', architect: 'גל אור פישביין', developer: 'קרדן נדל"ן', units: 150, floors: 12 },
    { id: 3, name: 'Project C', imageUrl: C, address: '1234 Main St', architect: 'גל אור פישביין', developer: 'קרדן נדל"ן', units: 160 },
    { id: 4, name: 'Project D', imageUrl: D, address: '1234 Main St', architect: 'גל אור פישביין', developer: 'קרדן נדל"ן', units: 160 },
    { id: 5, name: 'גליל ים הרצליה', imageUrl: E, address: 'מגדל גליל ים', architect: 'גל אור פישביין', developer: 'קרדן נדל"ן', units: 159, floors: 28, state: "קרקע זמינה לבניה היתר בניה צפוי אמצע 2026", detaildImages: [GlilYam2, GlilYam] },
    { id: 6, name: 'מערב הפארק רעננה', imageUrl: F, address: '1234 Main St', architect: 'גל אור פישביין', developer: 'קרדן נדל"ן', units: 199, floors: 10, state: 'קרקע זמינה לבניה היתר בניה צפוי סוף 2027', detaildImages: [Rananan1, Rananan] }
  ];

  useEffect(() => {
    const projectData = projects.find(p => p.id.toString() === projectId);
    setProject(projectData);
  }, [projectId]);

  if (!project) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.pageContainer}>
        <Helmet>
        <title>Our Projects - Lahav Group | Transforming Real Estate in Israel</title>
        <meta name="description" content="Explore the groundbreaking projects led by Lahav Group across Israel. From residential developments to commercial spaces, discover how we transform ideas into reality, delivering exceptional value and quality." />
        </Helmet>
      <div className={styles.projectDetails}>
        <div className={styles.imageContainer}>
          <img src={project.imageUrl} alt={project.name} className={styles.projectImage} />
        </div>
        <div className={styles.details}>
          <h1 className={styles.projectTitle}>{project.name}</h1>
          {project.architect && <p><strong>שם אדריכל:</strong> {project.architect}</p>}
          {project.developer && <p><strong>שם היזם:</strong> {project.developer}</p>}
          {project.floors && <p><strong>קומות:</strong> {project.floors}</p>}
          {project.units && <p><strong>מספר יחידות דיור:</strong> {project.units}</p>}
          {project.state && <p><strong>סטתוס:</strong> {project.state}</p>}
          {project.detaildImages && project.detaildImages.length > 0 && (
            <div className={styles.imagesContainer}>
              {project.detaildImages.map((imgUrl, index) => (
                <img key={index} src={imgUrl} alt={`Detail ${index}`} className={styles.detailImage} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
