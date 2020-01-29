import React, {useState, useEffect} from 'react';
import {fetchUsers} from './api'
import qs from 'qs';
import './App.css';
import Nav from './nav'
import Users from './users'
import Home from './home'

function App() { 

  const getHash = ()=> {
    return window.location.hash.slice(1);
  }
  const [ params, setParams ] = useState(qs.parse(getHash()));
  
  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      setParams(qs.parse(getHash()));
    });
    setParams(qs.parse(getHash()));
  }, []);
  
  console.log(params)

  return (
    <div className="App">
      <Nav />
      {params.view === "users" && <Users page = {params.page} />}
      {params.view === "home" && <Home/>}
    </div>
  );
}

export default App;
