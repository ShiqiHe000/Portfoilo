import React, {useEffect} from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import bookshelf from "../imgs/BOOKSHELF.png";
import { breakLarge } from "../variables/variables";
import {projectsAnimation} from './Animations';


const FullStackProjects = () => {
    useEffect(() => {
        const screenWidth = window.screen.width;

        if (screenWidth > breakLarge) {
            projectsAnimation('[data-project-titles]', '[data-project-card]')
        }
    }, []);


    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>BOOKSHELF Reading App</h4>
                    <a
                        href="https://mvc-book.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.goButton}>
                        <div className={styles.goCircle}>
                            <GoArrow className={styles.arrow} />
                        </div>
                    </a>
                    <p className={styles.projectDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem adipisci ipsum quae, maxime ipsa, natus
                        reiciendis inventore aliquid ad quia nisi sed tenetur
                        dolorem ullam autem culpa minus aliquam laudantium optio
                        distinctio deleniti ipsam totam sequi impedit? Ea
                        repellendus neque hic doloribus officia aperiam
                        distinctio eius officiis. Sequi, veniam deserunt?
                    </p>
                </div>

                <a
                    href="https://mvc-book.herokuapp.com/"
                    className={styles.projectLink}>
                    <img
                        src={bookshelf}
                        alt="BOOKSHELF App"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
};

export default FullStackProjects;
