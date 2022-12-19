import { useState } from "react"; // import a hook used to store a state
import { useNavigate } from "react-router-dom"; // import a navigation method

import Key from "../../../services/secretkey/key"; // imports the key in which it is registered to be used

import styles from "./index.module.css"; // import css file


function Home(){

  const [userKey, setUserKey] = useState(""); // state to fetch the key typed by the user

  const systemKey = Key() // key search in "db"
  const navigate = useNavigate(); // hook used to navigate between pages

  const sessionToken = Math.floor(Date.now() * Math.random()).toString(36); // id generator

  function submit(){
    
    /*
    if the user enters the correct key, a token will be stored and
     the user will be redirected to the dashboard page.
    otherwise, the use receives an error message.
    */

    if(userKey.valueOf() === systemKey){
      localStorage.clear();
      /*
        if the user already contain has the stored token, he will be redirected to the dashboard page.
        otherwise, the algorithm will add a token and the user will be redirected to the dashboard page
      */

      if(localStorage.getItem("login")){
        navigate("/dashboard")
      } else {

        localStorage.setItem("login", sessionToken);
        navigate("/dashboard");

        setTimeout(() => {
          localStorage.removeItem("login");
        }, 3600000); //1 hora
        
      }

    } else {
      alert("tente novamente com outro token");
    }
  }

  return(
    <form className={styles.form} onSubmit={((e) => { e.preventDefault(); submit();})}>
        <input 
          type="text" 
          name="key"
          onChange={((e) => setUserKey(e.target.value))} 
          placeholder="Key"
        />
        <input 
          type="submit" 
          value="Entrar"
        />
      </form>
  )
}


export default Home;