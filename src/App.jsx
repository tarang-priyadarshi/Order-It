import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
//import Cart from './components/cart/Cart.jsx';
import Login from './components/users/Login.jsx'
import Register from './components/users/Register.jsx'
import Profile from "./components/users/Profile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { loadUser } from "./actions/userAction.js";
import store from "./store.js";
import UpdateProfile from "./components/users/UpdateProfile.jsx";
import ForgotPassword from "./components/users/ForgotPassword.jsx";
import NewPassword from "./components/users/NewPassword.jsx";
import Cart from "./components/cart/Cart.jsx";
import OrderSuccess from "./components/cart/OrderSuccess.jsx"
import ListOrders from "./components/order/ListOrders.jsx";
import OrderDetails from "./components/order/OrderDetails.jsx";
//import { useDispatch, useSelector } from "react-redux";
//import { fetchCartItems } from "./actions/cartAction.js";

export default function App() {

  console.log(store);
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  /*const dispatch =useDispatch();
  const {user} = useSelector((state)=>state.auth);
  if(user){
    dispatch(fetchCartItems());
  }*/
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eats/stores/:id/menus" element={<Menu />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="/users/signup" element={<Register />} />
            <Route path="/users/me/" element={<Profile />} />
            <Route path="/users/me/update" element={<UpdateProfile />} />
            <Route path="/users/me/forgotPassword" element={<ForgotPassword />} />
            <Route path="/users/resettPassword/:token" element={<NewPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<OrderSuccess />} />
            <Route path="/eats/orders/me/myOrders" element={<ListOrders />} />
            <Route path="/eats/orders/:id" element={<OrderDetails />} />
            <Route path="*" element={<h1>The page does not exist</h1>} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}
