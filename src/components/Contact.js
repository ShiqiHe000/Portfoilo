import React, { useEffect } from "react";
import styles from "../scss/_Contact.module.scss";
import { ReactComponent as ConutactSvg } from "../imgs/contact.svg";
import { ReactComponent as EmailSvg } from "../imgs/email-black.svg";
import { ReactComponent as LinkedInSvg } from "../imgs/linkedin.svg";
import { ReactComponent as GitHubSvg } from "../imgs/github-logo.svg";
import { contactAnimation } from "./Animations";

const Contact = () => {
    useEffect(() => {
        contactAnimation("[data-contact-title]", "[data-contact-card]");
    }, []);

    return (
        <div className={`container ${styles.contactContainer}`}>
            <a id="contact"></a>
            <h3 className="secondaryTitle" data-contact-title>
                Contact
            </h3>
            <h2 className="primaryTitle" data-contact-title>
                Get in Touch
            </h2>
            <div className={styles.card} data-contact-card>
                <ConutactSvg className={styles.contactSvg} />
                <div>
                    <div className={styles.greeting}>
                        Don't be Shy, Say Hello!
                        <div className={styles.email}>shiqihe748@gmail.com</div>
                    </div>
                    <ul>
                        <li>
                            <a href="mailto:heshiqi748@gmail.com">
                                <EmailSvg className={styles.contackLinkIcons} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/shiqi-he-498961190/"
                                target="_blank"
                                rel="noreferrer">
                                <LinkedInSvg
                                    className={styles.contackLinkIcons}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ShiqiHe000"
                                target="_blank"
                                rel="noreferrer">
                                <GitHubSvg
                                    className={styles.contackLinkIcons}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
