import React, { useEffect, useState } from 'react';
// import './App.css';

function App() {
  // hooks should be instantiated inside a functional account on the top level of the account 

  // const [count,setCount]=useState(0); // use state is a hook 
  //usestate hoook is generally used for handeling reactive hook 
  // genreally state in react is generally used to handel data 
  // generally usestate returns a pair of values 
  // one a value it stores and another function handler to update the value
  
// useEffect which helps us to apply logic for all the lifecycle componenent function 

  // useEffect(()=>{
  //   alert("hello working with use state")
  //   //works when mounted and when state changes 

  // })

  // const [resourcetype,setresourcetype]=useState('posts')
  const [windowwidth,setwindowwidth]=useState(window.innerWidth)

  // useEffect(()=>{
  //   fetch(`https://jsonplaceholder.typicode.com/${resource}`)
  // .then(response => response.json())
  // .then(json => console.log(json))

  // },[resourcetype])
  // useeffect takes other sets of parameters in the form an array generally 
  // so the array of parameters are set of parameters destined to change when that specific parameter changes 
  const handlechange=()=>{
    setwindowwidth(window.innerWidth)
  }
  useEffect(()=>window.addEventListener('resize',handlechange))
  return (
    <div>

      <div>{windowwidth}</div>
      {/* <button onClick={()=>setresourcetype('posts')}>posts</button>
      <button onClick={()=>setresourcetype('users')}>users</button>
      <button onClick={()=>setresourcetype('comments')}>comments</button>
      <p>{resourcetype}</p> */}
      {/* <p>you clicked {count} times</p>
      <button onClick={()=>setCount(prevcount => prevcount+1)}> click me </button> */}
    </div>
  );
}

export default App;
