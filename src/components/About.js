import React from 'react';
import styles from './About.module.css';
import { Helmet } from 'react-helmet';
import YARINlAHAV from '../Content/YARINlAHAV.jpg'
function About() {
  return (
    <div className={styles.aboutContainer}>
    <Helmet>
      <title>About Us - Lahav Group | Real Estate Leaders in Israel</title>
      <meta name="description" content="Learn about Lahav Group, a leading real estate company based in Tel Aviv. We specialize in organizing purchasing groups for major real estate projects across Israel, offering clients unparalleled expertise and savings." />
    </Helmet>

      <h1 className={styles.h1}>About</h1>
      <h2 className={styles.h2}>הסיפור שלנו </h2>
      <div className={styles.producerSection}>
        <img src={YARINlAHAV} alt="Producer" className={styles.producerImage} />
        <h3 className={styles.producerName}>Yarin Lahav</h3>
      </div>
      <div className={styles.contentSection}>
        <h4>קבוצת להב מתמחה בעסקאות נדל"ן בסקטור הפרטי והעסקי.</h4>
        <p>קבוצת להב מתמחה בעסקאות נדל"ן בסקטור הפרטי והעסקי. הקבוצה מתעסקת באיגוד קבוצות רכישה באזור המרכז במסגרת "זכות לדירה" וכן גם מארגנים קבוצות רוכשים בפרויקטים נבחרים בארץ בחיסכון של 6-9% ממחיר השיווק אצל היזמים. עקב מורכבותם של עסקאות הנדל"ן בארץ והצורך לטפל בכל עסקה באופן פרטני ואישי, הקבוצה פיתחה קשרים מול וועדות התכנון השונות ובעלי המקצוע הטובים ביותר, בכדי לנהל עסקאות במקצועיות ובמהירות רבה תוך הגנה ובדיקות עומק ללקוחותינו בעסקותיהם</p>
        
      </div>
    </div>
  );
}

export default About;
