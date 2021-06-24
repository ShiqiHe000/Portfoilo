import React from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import bookshelf from "../imgs/BOOKSHELF.png";

const BookShelf = () => {
    const GIT_URL = "https://github.com/ShiqiHe000/BOOKSHELF";
    const WEB_URL = "https://mvc-book.herokuapp.com/";

    return (
        <div className={`${styles.card} ${styles.card1}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>BOOKSHELF Reading App</h4>
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
                        A book recommendation App to expand your horizon.
                        <ul>
                            <li>
                                Using the Model-View-Controller design pattern.
                            </li>
                            <li>CSS animations.</li>
                            <li>Form control: create, update, and delete.</li>
                            <li>
                                RESTful API: performs GET, PUT, POST, DELETE API
                                requests.
                            </li>
                            <li>Files upload by finepond.</li>
                            <li>Wed hosting: Heroku.</li>
                        </ul>
                    </div>
                </div>

                <a
                    href={WEB_URL}
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

export default BookShelf;
