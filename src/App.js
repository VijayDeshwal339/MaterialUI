import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import HomeForm from './pages/HomeForm';
import SignupForm from './pages/SignupForm';
import LoginForm from "./pages/LoginForm";
import DashboardForm from './pages/DashboardForm';
import PrivateRoute from './components/PrivateRoute';


 const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
    <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<HomeForm isLoggedIn={isLoggedIn}/>}></Route>
      <Route path="/signup" element={ <SignupForm setIsLoggedIn={setIsLoggedIn}/>}></Route>
      <Route path="/login" element={<LoginForm setIsLoggedIn ={setIsLoggedIn}/>}></Route>
      <Route path="/dashboard" element={<HomeForm/>}/>

      <Route path="/user" element={<PrivateRoute isLoggedIn={isLoggedIn}/>}>
        <Route path="dashboard" element={<DashboardForm/>}/>
      </Route>
    </Routes>
    
    </div>
  );
};

export default App;
