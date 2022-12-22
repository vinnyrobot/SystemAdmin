import styles from "./index.module.css"; // imports css file

import { useState } from "react"

import Navbar from "../../layout/Navbar"; // imports the component navbar from layout
import Footer from "../../layout/Footer"; // imports the component footer from layout


function Dashboard(){
    const [users, setUsers] = useState([]); // stored all users that comes from API
    
    //if the user does not have the stored token, he will be redirected to the home page
    if(!localStorage.getItem("login")){
        window.location.href = "/";
        return null;
    }
    
    //fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users",{
        method: "GET", 
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json()) // get the response that came from API and transforms it into JSON
    .then(data => setUsers(data)) // get data from response
    .catch(error => console.log(error)) // if there are any errors, they will appear in the console

    return(
        <>
            <Navbar/>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>USERNAME</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {users.map((user: any) => (
                        <tr>
                            <td className={styles.id}>{user.id}</td>
                            <td className={styles.name}>{user.name}</td>
                            <td className={styles.email}>{user.email}</td>
                            <td className={styles.username}>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </>
    )
}

export default Dashboard;