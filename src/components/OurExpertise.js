import React from 'react';
import styles from './OurExpertise.module.css'; // Import the CSS module
import { Helmet } from 'react-helmet';

import bankcard from "../Content/bank-card-discount-svgrepo-com.svg"

function OurExpertise() {
    const expertises = [
        { title: 'קבוצת רכישה', description: 'קבוצת רכישה היא מודל שיתופי לרכישת נדל"ן, שבו כמה אנשים מאגדים את כוחותיהם והשאיפות שלהם כדי לרכוש נכס מסוים או ברוב המקרים רכישת מגרש בכדי לפתח אותו  לבנות עליו כל שכל חברי הקבוצה יקבלו דירות בפרויקט העתידי. במסגרת קבוצת רכישה, כל חבר יכול לבחור את הדירה המועדפת עליו, והיתרון המרכזי הוא לרוב מחיר נמוך יותר מאשר קניית דירה באופן פרטי. קבוצות רכישה פועלות לרוב תחת ניהולו של מנהל מקצועי או יזם, שעוזר בתהליך המו"מ, תכנון והקמה של הפרויקט שזהו למעשה גם הסוד בבחירת קבוצת רכישה, המחיר שקונים את הקרקע הוא חשוב ביותר אך האלמנט המשמעותי בהצלחה של פרויקט מסוג זה הוא בוודאי מי שמארגן את זה, הניסיון עושה את ההבדל. ברוב המקרים, חברי קבוצת הרכישה נהנים משליטה רבה יותר על הפרויקט, כולל החלטות לגבי תכנון, עיצוב ותנאי המגורים. עם זאת, חשוב לקחת בחשבון שגם קיימת אינטראקציה עם הסיכונים והאתגרים הכרוכים בניהול קבוצת רכישה, כמו עיכובים בבנייה או שינויים בעלויות. קבוצת קונים או קבוצת רוכשים מתייחסת לקבוצה של אנשים או עסקים שמתאגדים יחד כדי לקנות מוצרים או שירותים, במקרה דנן, מדובר לרוב בדירות במחיר מופחת או בתנאים טובים יותר מאלה שהיו מקבלים כאנשים פרטיים או כעסקים בודדים. קבוצות אלו יכולות להתארגן לקנייה מרוכזת. קבוצת קונים מביאה עמה חיזוק כוח קנייה משמעותי, שכן על ידי רכישת דירות בכמויות גדולות, ניתן לנהל מו"מ מול היזמים ולקבל הנחות משמעותיות. כאשר קבוצת אנשים מתאגדת למטרה של רכישת דירות, היא מקנה לעצמה כוח קנייה גדול יותר, שמשפיע הן על מחיר הרכישה של הדירות והן על התנאים המוצעים על ידי היזמים. בנוסף, קבוצות רוכשים מספקות פלטפורמה לשיתוף ידע ומשאבים.', icon: bankcard },
        { title: 'מימון פרויקטים', description: 'במסגרת ליווי עסקאות הנדל"ן הרבות והמורכבות, אנו מלווים את לקוחותינו אף במימון העסקאות. הליווי הפיננסי מול הבנקים ומול גופים חוץ בנקאים ניתן ללקוחותינו בכל הרמות, הן כיזמים, הן כבעלי קרקע והן כרוכשים. לקבוצה יש ניסיון רב בניהול משא ומתן מול התאגידים הבנקאיים ומוסדות פיננסים שונים', icon: bankcard },
        { title: 'התחדשות עירונית ', description: 'מתחמים עירוניים נרחבים כמו מטרופולין גוש דן זקוקים להתחדשות עירונית ולשדרוג הבניינים הישנים. אחת מהדרכים היעילות להשיג זאת היא באמצעות פרויקטים של הריסה ובנייה – תמ"א 38/2 . במסגרת מסלול זה, היזם יוזם פרויקט חדש לגמרי, הנבנה על המגרש של הבניין הקודם לאחר הריסתו ופינויו. בעלי הדירות מקבלים דירות ובניינים חדשים לגמרי, המבוססים על תשתיות מודרניות וחדישות, באותה סביבה עירונית וקהילתית שהם אוהבים. כל זאת מתבצע תוך שימור המרקם הקהילתי והעירוני הקיים. כיום יש הליך נוסף שנכנס לתוקף לאחר פקיעת התמ"א, למעשה מדובר ב"תכנית בניינית" המחלקת את העיר לאזורים, לפי כמה קטגוריות (רחובות ראשיים, רחובות משניים, ומוקדים מרכזיים בעיר) וקובעת לכל בניין, בכל אזור, את מנגנון התכנון המתאים לו (חיזוק ועיבוי או הריסה ובנייה מחדש). נוסף על כך, קובעת התכנית נפח בינוי ושימושים לכל מגרש במסלול הרלוונטי שיאפשר הוצאת היתר בדומה לתמ"א 38. עוד קובעת התכנית גם אזורים המיועדים לפינוי-בינוי ולהעצמה ניכרת, כמו סביב תחנות המטרו העתידיות, שבהם לא תתאפשר התחדשות של כל מבנה בנפרד, ולעיתים מציינת התכנית גם אזורים בהם לא תתאפשר התחדשות כלל.', icon: bankcard },
        { title: 'פינוי-בינוי', description: 'פינוי-בינוי הוא תהליך אשר במסגרתו נהרסים בניינים ישנים כדי לפנות מקום לבניינים חדשים ומודרניים לרוב מדובר במספר רחובות ויוכל להגיע לשכונה שלמה המתחדשת. תהליך זה ארוך ומורכב שכן יש צורך בלהכין תב"ע חדשה לאזור המתחדש. בכדי להצליח, חייב להיות שיתוף פעולה בין שלושה גורמים, דיירי הבניינים הקיימים, היזם ורשויות התכנון. בסוף התהליך הדיירים הקיימים מקבלים תמורות כגון דירות חדשות או תוספות שטח בדירותיהם. המטרה היא לשדרג את איכות המגורים, לשפר את התשתיות וליצור סביבות מגורים נוחות ומתקדמות יותר. תהליכי פינוי-בינוי מבוצעים באזורים עירוניים צפופים, ומניבים יתרונות רבים, כולל חידוש המרקם העירוני, הגדלת היצע הדירות בעיר והפיכת השכונות לאטרקטיביות ונעימות יותר עבור התושבים.', icon: bankcard }
    ];

    return (
        <div className={styles.container}>
                <Helmet>
                <title>Our Expertise - Lahav Group | Real Estate Specialists</title>
                <meta name="description" content="Discover the areas of expertise at Lahav Group. As leading real estate specialists in Israel, we excel in organizing purchasing groups, managing large-scale projects, and delivering exceptional value to our clients." />
                </Helmet>

            <h1>Our Expertise</h1>
            <h2>תחומי עיסוק</h2>
            <div className={styles.HR1}/>
            <div className={styles.expertiseList}>
                {expertises.map(expertise => (
                    <div key={expertise.title} className={styles.expertise}>
                        <div>
                            <h3>{expertise.title}</h3>
                            <hr className={styles.hr}/>
                            <p>{expertise.description}</p>
                        </div>
                        <img src={expertise.icon} alt="icon" className={styles.icon} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurExpertise;
