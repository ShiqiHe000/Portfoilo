import React, { useEffect } from "react";
import styles from "../scss/_SoftSkills.module.scss";
import { ReactComponent as SpeakSvg } from "../imgs/speak.svg";
import {
    softSkillAnimation,
    softSkillAnimationSmallScreen,
} from "./Animations";
import { breakXSmall } from "../variables/variables";

const SoftSkills = () => {
    useEffect(() => {
        const screenWidth = window.screen.width;

        if (screenWidth > breakXSmall) {
            softSkillAnimation(
                "[data-soft-skill-title]",
                "[data-soft-skill-card]"
            );
        } else {

            const cards = document.querySelectorAll('[data-soft-skill-card]');
            softSkillAnimationSmallScreen(
                "[data-soft-skill-title]",
                cards
            );
        }
    }, []);

    return (
        <div>
            <h3 className="secondaryTitle" data-soft-skill-title>
                Soft Skills
            </h3>
            <div className={styles.cardGrid}>
                <div
                    className={`${styles.card} ${styles.cardTopLeft}`}
                    data-soft-skill-card>
                    <SpeakSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Communication</h4>
                    <p className={styles.cardDetails}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis, excepturi?
                    </p>
                </div>
                <div
                    className={`${styles.card} ${styles.cardTopRight}`}
                    data-soft-skill-card>
                    <SpeakSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Communication</h4>
                    <p className={styles.cardDetails}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis, excepturi?
                    </p>
                </div>
                <div
                    className={`${styles.card} ${styles.cardBottomLeft}`}
                    data-soft-skill-card>
                    <SpeakSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Communication</h4>
                    <p className={styles.cardDetails}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis, excepturi?
                    </p>
                </div>
                <div
                    className={`${styles.card} ${styles.cardBottomRight}`}
                    data-soft-skill-card>
                    <SpeakSvg className={styles.icon} />
                    <h4 className={styles.cardTitle}>Communication</h4>
                    <p className={styles.cardDetails}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Officiis, excepturi?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SoftSkills;
