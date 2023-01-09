import { Link } from "react-router-dom";

import styles from "./index.module.css";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar(){

    const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);

    function clearLocalStorage(){
        localStorage.clear()
        alert("Seu token de acesso foi excluído");
    }

    function handleShowNavbarResposive(){
        setShowNavbarResponsive(true);
    }

    return(
        <>
            <header className={showNavbarResponsive ? styles.navbar : styles.closeNavbar}>
                <div className={styles.logo}>
                    <h2 className={styles.textLogo}>Jvn</h2>
                </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className={styles.link}>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li className={styles.link} onClick={clearLocalStorage}>
                        <Link to="/">Log Out</Link>
                    </li>
                </ul>
                <FaBars size={30} onClick={handleShowNavbarResposive}/>
            </header>
            <section className={showNavbarResponsive ? styles.responsiveNavbar : styles.closeResponsiveNavbar}>
            </section>
        </>
    )
}

export default Navbar;