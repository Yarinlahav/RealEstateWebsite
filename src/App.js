import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import ArrowIcon from './Content/379807.svg';
import Israel from './Content/Israel.png';
import ExpertiseIcon1 from './Content/bank-card-discount-svgrepo-com.svg';
import plan1068 from './Content/רמת השרון מערב - מתחם צפוני.png';
import ח2040 from './Content/ח2040.jpg';
import ח619 from './Content/619.jpg';

function App() {
  const images = [
    { src: plan1068, alt: "Production", name: "PRODUCTION", description: "1068 - רמת השרון מערב" },
    { src: ח2040, alt: "Production", name: "PRODUCTION", description: "ח2040 - חולון" },
    { src: ח619, alt: "Production", name: "PRODUCTION", description: "ח619 - חולון" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const centerImage = images[currentIndex];
  const leftImage = images[(currentIndex - 1 + images.length) % images.length];
  const rightImage = images[(currentIndex + 1) % images.length];

  const Location = ({ top, left, name }) => (
    <div className={styles.location} style={{ top: `${top}%`, left: `${left}%` }}>
      <div className={styles.tooltip}>{name}</div>
    </div>
  );

  return (
    <div className="App">
      <Helmet>
        <title>Lahav Group - Real Estate Excellence in Israel</title>
        <meta name="description" content="Welcome to Lahav Group. Based in Tel Aviv, we specialize in organizing purchasing groups for Israel's largest real estate projects, ensuring significant savings and premium locations for our clients." />
      </Helmet>

      <header className={styles.heroSection}>
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src={"https://d2h0s5tlczrtje.cloudfront.net/Header.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoOverlay}>
          <h1>Lahav Group</h1>
          <hr className={styles.heroLine} />
          <p>Based in Tel Aviv, we are Creating Music Videos for artists and Content for Global brands.</p>
          <p>We bring the collective years of our experience and strategies to every project.</p>
          <Link to="/contact" className={styles.contactButton}>Contact</Link>
          <img src={ArrowIcon} alt="Arrow Down" className={styles.arrowDown} />
        </div>
      </header>
      <main className={styles.mainContainer}>
        <section className={styles.about}>
          <div className={styles.text}>
            <h4 className={styles.aboutTitle}>אודות</h4>
            <hr className={styles.hr} />
            <p>
              קבוצת להב מתמחה בעסקאות נדל"ן בסקטור הפרטי והעסקי. הקבוצה מתעסקת באיגוד קבוצות רכישה באזור המרכז במסגרת "זכות לדירה" וכן גם מארגנים קבוצות רוכשים בפרויקטים נבחרים בארץ בחיסכון של 6-9% ממחיר השיווק אצל היזמים. עקב מורכבותם של עסקאות הנדל"ן בארץ והצורך לטפל בכל עסקה באופן פרטני ואישי, הקבוצה פיתחה קשרים מול וועדות התכנון השונות ובעלי המקצוע הטובים ביותר, בכדי לנהל עסקאות במקצועיות ובמהירות רבה תוך הגנה ובדיקות עומק ללקוחותינו בעסקותיהם
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={Israel} alt="Map of Israel" className={styles.mapImage} />
            <Location top={38} left={47} name="Tel Aviv" />
            <Location top={27} left={63} name="Haifa" />
            <Location top={37} left={78} name="Jerusalem" />
          </div>
        </section>

        <section className={styles.expertise}>
          <h2 className={styles.h2}>Our Expertise</h2>
          <h3 className={styles.h3}>תחומי העיסוק שלנו</h3>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon1} alt="Expertise 1" />
              <p>Expertise Area 1</p>
            </div>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon1} alt="Expertise 2" />
              <p>Expertise Area 2</p>
            </div>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon1} alt="Expertise 3" />
              <p>Expertise Area 3</p>
            </div>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon1} alt="Expertise 4" />
              <p>Expertise Area 4</p>
            </div>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon1} alt="Expertise 5" />
              <p>Expertise Area 5</p>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.titleContainer}>
            <h2 className={styles.h2}>Our projects</h2>
            <h3 className={styles.h3}>תכניות בהפשרה</h3>
          </div>
          <div className={styles.sliderContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.sideImage}>
                <img src={leftImage.src} alt={leftImage.alt} />
              </div>
              <div className={styles.centerImage}>
                <button className={`${styles.arrowButton} ${styles.prev}`} onClick={goToPrev}>{"<"}</button>
                <img src={centerImage.src} alt={centerImage.alt} />
                <div className={styles.imageDescription}>{centerImage.description}</div>
                <button className={`${styles.arrowButton} ${styles.next}`} onClick={goToNext}>{">"}</button>
              </div>
              <div className={styles.sideImage}>
                <img src={rightImage.src} alt={rightImage.alt} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;