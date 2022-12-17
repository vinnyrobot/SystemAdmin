import { useState } from "react"

function Home(){

  const [name, setName] = useState([]);

  function handleChange(e: string){
    setName({...name, [e.target.value: e.name.value]})
  }

  function setLocalStorage(name: string){
    localStorage.setItem("ticket", JSON.stringify(name));
  }

  function submit(e: Event){
    e.preventDefault();
    setLocalStorage(name)
    alert(localStorage.getItem("ticket"));
  }

  return(
    <form onSubmit={submit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name"/>
      <input type="submit" value="Enviar"/>
    </form>
  )
}

export default Home;