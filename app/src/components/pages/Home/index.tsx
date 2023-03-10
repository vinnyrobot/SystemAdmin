import { useState } from "react"; // import a hook used to store a state
import { useNavigate } from "react-router-dom"; // import a navigation method

import styles from "./index.module.css"; // import css file


function Home(){

  const [userKey, setUserKey] = useState(""); // state to fetch the key typed by the user
  const navigate = useNavigate(); // hook used to navigate between pages

  const sessionToken = Math.floor(Date.now() * Math.random()).toString(36); // id generator

  function submit(){
    /*
    if the user enters the correct key, a token will be stored and
     the user will be redirected to the dashboard page.
    otherwise, the user receives an error message.
    */

    if(userKey === "systemkey1"){
      /*
        if the user already contain has the stored token, he will be redirected to the dashboard page.
        otherwise, the algorithm will add a token and the user will be redirected to the dashboard page
      */

      if(localStorage.getItem("login")){
        navigate("/dashboard");
      } else {
        localStorage.setItem("login", sessionToken);
        navigate("/dashboard");
      }

    } else {
      alert("tente novamente com outro token");
    }
  }

  return(
    <>
      <form className={styles.form} onSubmit={
        ((e) => { 
          e.preventDefault(); 
          submit();
        })}
      >
          <input
            className={styles.input} 
            type="password" 
            name="key"
            onChange={((e) => setUserKey(e.target.value))} 
            placeholder="Key"
            required
          />
          <input 
            className={styles.button}
            type="submit" 
            value="Entrar"
          />
      </form>
    </>
  )
}


export default Home;
