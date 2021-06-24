import React from "react";
import styles from "../scss/_OtherProjects.module.scss";

const HelloweenGame = () => {
    const gitHub = "https://github.com/ShiqiHe000/Halloween-card-matching-game";
    const webLink = "https://card-matching000.herokuapp.com/";

    return (
        <div className={styles.container} data-other-project>
            <h3 className={styles.title}>Helloween Card-Matching Game</h3>
            <h4 className={styles.subtitle}>Front-end</h4>
            <p className={styles.description}>
                A Halloween theme online card-matcing game. Interactive design
                with creepy background audios.
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

export default HelloweenGame;
