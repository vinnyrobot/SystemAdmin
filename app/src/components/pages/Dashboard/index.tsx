import styles from "./index.module.css";


function Dashboard(){

    if(!localStorage.getItem("login")){
        window.location.href = "/";
        return null;
    } else{
        return(
            <section className={styles.tasks}>
                <h1>Dashboard</h1>
            </section>
        )
    }
}

export default Dashboard;