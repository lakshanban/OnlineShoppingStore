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
import DetailForm from "./Components/PaymentGateway/DetailForm";
import NonLoggedHome from "./Components/NonLoggedHome/NonLoggedHome";

function App() {
  return (
    <div className="App">
       <Test/>
<<<<<<< HEAD
=======
       <DetailForm/>
       {/*<ProductsData/>*/}
       {/*<NonLoggedHome/>*/}
>>>>>>> fcb3fd60c358ee150ab513f4e3df1d11b68c4466
    </div>
  );
}

export default App;
