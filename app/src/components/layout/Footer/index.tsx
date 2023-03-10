import styles from "./index.module.css" // imports css file

import { FaFacebook, FaInstagramSquare, FaGooglePlus, FaLinkedin, FaGithub } from "react-icons/fa"; // imports icons from react-icons

function Footer(){
    /*
      if the user clicks the log out button, the stored token that will be deleted
      and the user will be redirectded to the home page
    */ 

    function clearLocalStorage(){
        alert("Seu token de acesso foi excluído");
        localStorage.clear();
    }

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
                <h1>Login Again</h1>
                <span onClick={clearLocalStorage} className={styles.buttonLogin}>
                    Log Out
                </span>
            </div>
            <div className={styles.socialMedia}>
                <a target="_blank" href="https://instagram.com/vinny.ff1/"><FaInstagramSquare size={40}/></a>
                <a target="_blank" href="https://google.com"><FaGooglePlus size={40}/></a>
                <a target="_blank" href="https://linkedin.com/in/vinnyrobot"><FaLinkedin size={40}/></a>
                <a target="_blank" href="https://facebook.com" ><FaFacebook size={40}/></a>
                <a target="_blank" href="https://github.com/vinnyrobot"><FaGithub size={40}/></a>
            </div>
            <div className={styles.credits}>
                <span>&copy; 2022 Copyright VinnyRobot</span>
            </div>
        </footer>
    )
}

export default Footer;
