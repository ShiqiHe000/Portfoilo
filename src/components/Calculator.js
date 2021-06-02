import React from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import calculator from "../imgs/calculator.png";

const Calculator = () => {
    const GIT_URL = "https://github.com/ShiqiHe000/Calculator_javascript";
    const WEB_URL = "https://calculator-javascript000.herokuapp.com/";

    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>JavaScript Calculator</h4>
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
                    <p className={styles.projectDescription}>
                        A JavaScript web calculator.
                        <ul>
                            <li>CSS flexbox and grid.</li>
                            <li>CSS Animation.</li>
                            <li>DOM manipulation by JavaScript.</li>
                            <li>Dealt with edge cases.</li>
                        </ul>
                    </p>
                </div>

                <a href={WEB_URL} className={styles.projectLink}>
                    <img
                        src={calculator}
                        alt="Web Calculator"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
};

export default Calculator;
