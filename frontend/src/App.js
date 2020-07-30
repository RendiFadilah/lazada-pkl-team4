



import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage"
import ItemDetails from "./pages/ItemDetails"

import LoginPenjual from './pages/auth/login/LoginPenjual';
import LoginPembeli from './pages/auth/login/LoginPembeli'
import RegisterPenjual from "./pages/auth/register/RegisterPenjual"
import LandingApi from './api/LandingApi';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/detail/:id" component={ItemDetails}></Route>
        <Route path="/login" component={LoginPenjual}></Route>
        <Route path="/login-pembeli" component={LoginPembeli}></Route>
        <Route path="/register-penjual" component={RegisterPenjual}></Route>
        <Route path="/api" component={LandingApi}></Route>
      </Router>

    </div>
  );

} 
export default App;
