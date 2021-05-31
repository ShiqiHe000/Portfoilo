import React, { useEffect } from "react";
import styles from "../scss/_LandingPage.module.scss";
import btn from "../scss/_button.module.scss";
import { landingPage } from "./Animations";

const LandingPage = () => {
    useEffect(() => {
        landingPage();
    }, []);

    return (
        <div className={`container ${styles.landingContainer}`}>
            <h3 className={`${styles.subtitle} fadeIn`}>Welcome to My World</h3>
            <h1 className={`${styles.mainTitle} bounceIn`}>
                Full Stack Developer
            </h1>
            <p className={`${styles.description} fadeIn`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita nobis quo alias ratione doloremque. Aspernatur magnam
                repellendus ea omnis, perspiciatis ut, ducimus ad numquam
                deserunt facere id. Nemo, quidem eius?
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
