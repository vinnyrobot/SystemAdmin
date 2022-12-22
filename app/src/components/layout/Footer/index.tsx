import styles from "./index.module.css" // imports css file

import { FaFacebook, FaInstagramSquare, FaGooglePlus, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.presentation}>
                <div className={styles.footerContent}>
                    <h1>FOOTER CONTENT</h1>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Facere, reprehenderit accusamus aperiam aspernatur quasi placeat odit aliquam ducimus. 
                        Veritatis itaque aspernatur mollitia iste tenetur animi nulla quia officiis accusamus 
                        ad!e
                    </span>
                </div>
                <div className={styles.footerLinks}>
                    <h1>LINKS</h1>
                    <span>Link 1</span>
                    <span>Link 2</span>
                    <span>Link 3</span>
                    <span>Link 4</span>
                </div>
                <div className={styles.footerLinks}>
                    <h1>LINKS</h1>
                    <span>Link 1</span>
                    <span>Link 2</span>
                    <span>Link 3</span>
                    <span>Link 4</span>
                </div>
                <div className={styles.footerLinks}>
                    <h1>LINKS</h1>
                    <span>Link 1</span>
                    <span>Link 2</span>
                    <span>Link 3</span>
                    <span>Link 4</span>
                </div>
            </div>
            <div className={styles.loginRedirect}>
                <h1>Login for free</h1>
                <span className={styles.buttonLogin}>Log In</span>
            </div>
            <div className={styles.socialMedia}>
                <FaInstagramSquare size={40}/>
                <FaGooglePlus size={40}/>
                <FaLinkedin size={40}/>
                <FaFacebook size={40}/>
                <FaGithub size={40}/>
            </div>
            <div className={styles.credits}>
                <span>&copy; 2022 Copyright Vinny</span>
            </div>
        </footer>
    )
}

export default Footer;