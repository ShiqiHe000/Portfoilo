import React from "react";
import styles from "../scss/_OtherProjects.module.scss";

const EverydayPost = () => {
    const gitHub = "https://github.com/ShiqiHe000/everyday-posts-app";
    const webLink = "https://serene-rosalind-8ffe41.netlify.app/";

    return (
        <div className={styles.container} data-other-project>
            <h3 className={styles.title}>Everyday Posts App</h3>
            <h4 className={styles.subtitle}>Front-end</h4>
            <p className={styles.description}>
                A social media App for you to share your life, connect with your
                friends and have fun.
            </p>
            <p className={styles.technologies}>
                React, Redux, React Router, HTML, CSS, JavaScript
            </p>
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

export default EverydayPost;
