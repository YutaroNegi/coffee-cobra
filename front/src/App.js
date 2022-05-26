import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// components
import Header from './components/Header';
import Calc from './components/Calc';
import Home from './components/Home'
import Login from './components/Login'

// redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import loginReducer from './reducers/loginReducer';

function App() {
  function loadLoginStatus(){
    let status = JSON.parse(localStorage.getItem('login'))

    if(!status || status.login === 0){
      return status
    }else{
      return status
    }
  }
  const store = createStore(loginReducer, loadLoginStatus())

  store.subscribe(()=>{
    localStorage.setItem('login', JSON.stringify(store.getState()))
  })

  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/coffee" element={<Calc desiredResult='Coffee' firstItem='Water' secondItem='Ratio'/>}/>
          <Route path="/water" element={<Calc desiredResult='Water' firstItem='Ratio' secondItem='Coffee'/>}/>
          <Route path="/ratio" element={<Calc desiredResult='Ratio' firstItem='Coffee' secondItem='Water'/>}/>
          <Route path="/*" element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
