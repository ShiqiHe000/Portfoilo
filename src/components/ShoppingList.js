import React from "react";
import styles from "../scss/_FullStackProjects.module.scss";
import { ReactComponent as GoArrow } from "../imgs/go.svg";
import shoppingList from "../imgs/shopping-list-small.png";

const ShoppingList = () => {
    const GIT_URL = 'https://github.com/ShiqiHe000/MERN-Stack-Shopping-List';
    const WEB_URL = 'https://mern-shopping-list000.herokuapp.com/';

    return (
        <div className={`${styles.card} ${styles.card2}`} data-project-card>
            <div className={`${styles.cardLayout}`}>
                <div className={styles.cardText}>
                    <h4 className={styles.title}>MERN Stack Shopping List</h4>
                    <div className={styles.links}>
                        <a href={GIT_URL}>
                            GitHub
                        </a>
                        <span className={styles.linkSeparator}>|</span>
                        <a href={WEB_URL}>
                            Web
                        </a>
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
                        Full stack shopping list API using MongoDB, Express,
                        React, Node (MERN).
                        <ul>
                            <li>
                                React Hooks (useStates, useEffect, useContext,
                                useReducer).
                            </li>
                            <li>Framework for UI styling: reactstrap.</li>
                            <li>Animations: react-transition-group</li>
                            <li>
                                RESTful API: using HTTP requests to communicate with 
                                the database (GET, POST, PUT, DELETE).
                            </li>
                            <li>Built with Node.js and Express.</li>
                            <li>Wed hosting: Heroku.</li>
                        </ul>
                    </p>
                </div>

                <a
                    href={WEB_URL}
                    className={styles.projectLink}>
                    <img
                        src={shoppingList}
                        alt="Shopping list App"
                        className={styles.projectImg}
                    />
                </a>
            </div>
        </div>
    );
};

export default ShoppingList;
