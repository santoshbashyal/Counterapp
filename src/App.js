import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';


const App=() =>{
  const[number, setNumber]= useState(0)
  return (
    <div>

   <h1>Counter App </h1>
   <h2>{number}</h2>
   <button 
   onClick={()=> setNumber(number+1)} className='Button'>add</button>
   <button
    onClick={()=> setNumber(number-1)} className='Button'>down</button>
   <button 
   onClick={()=> setNumber(0)}className='Button'>reset</button>  
  
    </div>
   
  );
}

export default App;
