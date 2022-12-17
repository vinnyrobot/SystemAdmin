import { useState } from "react"

function Home(){

  const [name, setName] = useState([]);

  function handleChange(e: string){
    setName({...name, [e.target.value: e.name.value]})
  }

  function setLocalStorage(data: string){
    localStorage.setItem("ticket", JSON.stringify(data));
  }

  function submit(e: Event){
    e.preventDefault();
    setLocalStorage(name)
    console.log(localStorage.getItem("ticket"));
  }

  console.log(name)

  return(
    <form onSubmit={submit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name"/>
      <input type="submit" value="Enviar"/>
    </form>
  )
}

export default Home;