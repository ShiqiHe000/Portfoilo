import React, { useEffect } from "react";
import styles from "../scss/_Preload.module.scss";

const Preload = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            const preload = document.querySelector("[data-preload]");

            preload.classList.add(`${styles.preloadFinished}`);
        });
    }, []);

    return (
        <div className={styles.preload} data-preload>
            I am Coming
        </div>
    );
};

export default Preload;
