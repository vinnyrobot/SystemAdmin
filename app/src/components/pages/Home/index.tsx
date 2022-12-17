import { useState } from "react"

function Home(){

  const [name, setName] = useState([]);

  function submit(e: Event){
    e.preventDefault();
  }

  return(
    <form>
      <input type="text" name="name" onChange={(e: Event) => setName({...name, [e.target.value]: e.name.value})} placeholder="Name"/>
      <input type="submit" value="Enviar"/>
    </form>
  )
}

export default Home;