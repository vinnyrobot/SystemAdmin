import { Link } from "react-router-dom";

import styles from "./index.module.css";

import { FaBars } from "react-icons/fa";

function Navbar(){

    function clearLocalStorage(){
        localStorage.clear()
        alert("Seu token de acesso fou excluído");
    }

    return(
        <section className={styles.navbar}>
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
            <FaBars size={30}/>
        </section>
    )
}

export default Navbar;