import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const[nomes ,setNomes]=useState([{}])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
       setNomes(res.data)
    })
  },[]);


  return (
    <div className='display'>
        {
          nomes.map(function(data){
            return(
              <div className='card'>
                <b>Nome:</b>  {data.name} <br/><br/>
                <b>Email:</b>  {data.email}<br/><br/>
                <b>Nickname:</b>  {data.username}<br/><br/>
              </div>
            )
          })
        }
    </div>
  );
}

export default App;
