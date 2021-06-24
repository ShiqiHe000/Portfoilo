import React from 'react'
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import pyramid from "../imgs/pyramid.png";

const PyramidLanding = () => {
    const GIT_URL = "https://github.com/ShiqiHe000/3D-pyramid-landing-page";
    const WEB_URL = "https://objective-morse-8503dc.netlify.app/";

    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>
                        Cool 3D Pyramid Landing Page
                    </h4>
                    <div className={styles.links}>
                        <a href={GIT_URL}>GitHub</a>
                        <span className={styles.linkSeparator}>|</span>
                        <a href={WEB_URL}>Web</a>
                    </div>
                    <a
                        href={WEB_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.goButton}>
                        <div className={styles.goCircle}>
                            <GoArrow className={styles.arrow} />
                        </div>
                    </a>
                    <div className={styles.projectDescription}>
                        A 3D pyramid effect landing page.
                        <ul>
                            <li>3D effect with Three.js.</li>
                            <li>Mouse move interaction.</li>
                            <li>GSAP animations.</li>
                        </ul>
                    </div>
                </div>

                <a href={WEB_URL} className={styles.projectLink}>
                    <img
                        src={pyramid}
                        alt="3D pramid landing page"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
}

export default PyramidLanding
