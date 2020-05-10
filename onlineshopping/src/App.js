import React from 'react';

import './App.css';
import Test from "./Components/TestPage/Test";
import ComplexNavigationBar from "./Components/Common/ComplexNavigationBar/ComplexNavigationBar";
import LoggedHome from "./Components/LoggeHome/LoggedHome";
import Profile from "./Profile/Profile";
import Chat from "./Components/Chat/Chat";
import AdminHome from "./Components/Admin Panel/AdminHome";
import Product from "./Components/Product/Product";
import ProductsData from "./Components/Store Manager/ProductsData";

function App() {
  return (
    <div className="App">
       <Test/>
    </div>
  );
}

export default App;
