import { Link } from "react-router-dom";

import styles from "./index.module.css";

import { FaBars } from "react-icons/fa";

function Navbar(){
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
            </ul>
            <FaBars size={30}/>
        </section>
    )
}

export default Navbar;