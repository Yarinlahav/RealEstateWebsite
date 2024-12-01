import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import ArrowIcon from './Content/379807.svg';
import Israel from './Content/Israel.png';
import ExpertiseIcon1 from './Content/buy-home.png';
import ExpertiseIcon2 from './Content/people.png';
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
          <p>קבוצת להב מתמחה בעסקאות נדל"ן בסקטור הפרטי והעסקי</p>
          <p>הקבוצה מתעסקת באיגוד קבוצות רכישה באזור המרכז במסגרת זכות לדירה</p>
          <p>וכן גם מארגנים קבוצות רוכשים בפרויקטים נבחרים בארץ בחיסכון</p>
          <p>של עד 10% ממחיר השיווק אצל היזמים</p>
          <Link to="/contact" className={styles.contactButton}>Contact</Link>
          <img src={ArrowIcon} alt="Arrow Down" className={styles.arrowDown} />
        </div>
      </header>
      <main className={styles.mainContainer}>
        <section className={styles.about}>
          <div className={styles.text}>
            <h4 className={styles.aboutTitle} >אודות</h4>
            <hr className={styles.hr} />
            <p>
            קבוצת להב היא חברה מובילה בתחום הנדל"ן, המתמחה ביצירת פתרונות מתקדמים ומשתלמים עבור לקוחות פרטיים ועסקיים. החברה מתמקדת באיגוד קבוצות רכישה באזור המרכז במסגרת תוכנית "זכות לדירה", ומציעה ללקוחותיה הזדמנות ליהנות מחיסכון משמעותי של עד 30% ממחיר השוק. במקביל, החברה מארגנת קבוצות רוכשים בפרויקטים נבחרים ברחבי הארץ, המאפשרים ללקוחות לחסוך עד 10% ממחיר הדירות.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={Israel} alt="Map of Israel" className={styles.mapImage} />
            <Location top={38} left={47} name="Tel Aviv" />
            <Location top={16} left={80} name="Haifa" />
            <Location top={34} left={55} name="Herzliya" />
            <Location top={36} left={55} name="Ranana" />
            <Location top={30} left={63} name="Netanya" />

          </div>
        </section>

        <section className={styles.expertise}>
          <h2 className={styles.h2}>Our Expertise</h2>
          <h3 className={styles.h3}>תחומי העיסוק שלנו</h3>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon1} alt="Expertise 1" />
              <p>קבוצות רוכשים</p>
            </div>
            <div className={styles.expertiseItem}>
              <img src={ExpertiseIcon2} alt="Expertise 2" />
              <p>קבוצות רכישה</p>
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