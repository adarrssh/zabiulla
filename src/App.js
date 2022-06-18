import './App.css';
import MiddleMenu from './MiddleMenu/MiddleMenu';
import Navbar from './Navbar/Navbar';
import TopMenu from './TopMenu/TopMenu';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

  const [data, setData]=useState([]);
  
  useEffect(()=>{
    axios.get(' https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco').then(response=>{
        setData(response.data);
      }).catch(error=>{
        console.log(error);
      })
    },[])
    
  return (

    <>
      <Navbar data={data}/>
      <TopMenu data={data}/>
      <MiddleMenu data={data}/>
    </>

  );
}

export default App;
