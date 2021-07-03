import React from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import soapShop from "../imgs/soap-shop.png";

const SoapShop = () => {
    const GIT_URL = "https://github.com/ShiqiHe000/Soap-shop";
    const WEB_URL = "https://soap-shop000.herokuapp.com/";

    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>Bubbles Wonderland</h4>
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
                        An Online Soap Shop.
                        <ul>
                            <li>Dynamic landing page by HTML5 Canvas.</li>
                            <li>Fall stack App.</li>
                            <li>RESTful App.</li>
                        </ul>
                    </div>
                </div>

                <a href={WEB_URL} className={styles.projectLink}>
                    <img
                        src={soapShop}
                        alt="Soap shop page"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
};

export default SoapShop;
