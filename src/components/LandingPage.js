import React, { useEffect } from "react";
import styles from "../scss/_LandingPage.module.scss";
import btn from "../scss/_button.module.scss";
import { landingPage } from "./Animations";
import sinWave from "./sinWave";

const LandingPage = () => {
    useEffect(() => {
        landingPage();
        new sinWave("sinWaveCanvas");

        setTimeout(() => {
            new sinWave("sinWaveCanvas");
        }, 1000);
    }, []);

    return (
        <div className={`container ${styles.landingContainer}`}>
            <canvas id="sinWaveCanvas" className={styles.canvas}></canvas>
            <h3 className={`${styles.subtitle} fadeIn`}>Welcome to Shiqi's World</h3>
            <h1 className={`${styles.mainTitle} bounceIn`}>
                Everything About The Wed
            </h1>
            <p className={`${styles.description} fadeIn`}>
                Hello! I am Shiqi, who is passionate about web development. I
                would like to offer my expertise to help your company grow. If
                you are interested in me, please feel free to contact me.
            </p>
            <a
                href="#contact"
                className={`${btn.btn} ${btn.btnPrimary} ${styles.hireMeButton} scaleIn`}
                data-amplify-btn>
                Hire Me
            </a>
        </div>
    );
};

export default LandingPage;
