import React, {useEffect} from "react";
import styles from "../scss/_Navbar.module.scss";
import { ReactComponent as SheLogo } from "../imgs/logo.svg";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {



    return (
        <div className={`container-fluid ${styles.navBg}`}>
            <nav className={`container ${styles.navContainer}`}>
                <a href="/" className={styles.logo}>
                    <SheLogo />
                </a>
                <ul className={styles.navbarList}>
                    <li>
                        <a href="#aboutMe" className="scaleIn">About Me</a>
                    </li>
                    <li>
                        <a href="#projects" className="scaleIn">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="scaleIn">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
