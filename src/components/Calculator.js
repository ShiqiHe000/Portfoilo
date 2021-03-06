import React from "react";
import styles from "../scss/_OtherProjects.module.scss";


const Calculator = () => {
    const gitHub = "https://github.com/ShiqiHe000/Calculator_javascript";
    const webLink = "https://calculator-javascript000.herokuapp.com";

    return (
        <div className={styles.container} data-other-project>
            <h3 className={styles.title}>JavaScript Calculator</h3>
            <h4 className={styles.subtitle}>Front-end</h4>
            <p className={styles.description}>
                A nice-looking online calculator.   
            </p>
            <p className={styles.technologies}>HTML, CSS, JavaScript</p>
            <a
                href={gitHub}
                className={styles.link}
                target="_blank"
                rel="noreferrer">
                Git
            </a>
            <a
                href={webLink}
                className={styles.link}
                target="_blank"
                rel="noreferrer">
                Web
            </a>
        </div>
    );
};

export default Calculator;
