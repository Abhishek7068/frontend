
import "./App.css";
import { useState } from "react";
const API_URL = "https://api-kappa-ashen-87.vercel.app";


 export default function App(){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const greetingHandle = async () =>{
    if(!name.trim()){
      const response = await fetch(`${API_URL}/api/greet`);
      const data = await response.json();
      setMessage(data.error);
      return;
    }
    try {
      const response = await fetch(`${API_URL}/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
        setMessage('Error fetching greeting.');
    }
  }

  return (
    <div className="container">
      <div className="content">
        <h2>Greeting App</h2>
        <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
        <button onClick={greetingHandle}>Get Greeting</button>
        <p>{message}</p>                   
      </div>
    </div>
  );
}


