
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingpage/home/HomePage';
import SignUp from './landingpage/signup/SignUp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './landingpage/Navbar';
import Footer from './landingpage/Footer';
import AboutPage from './landingpage/about/AboutPage';
import ProductPage from './landingpage/products/ProductPage';
import SupportPage from "./landingpage/support/SupportPage"
import PricingPage from "./landingpage/pricing/PricingPage"
import NotFound from './landingpage/NotFound';
import Login from './landingpage/Login/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path='/' element={<HomePage/>}></Route>
     <Route path='/signup' element={<SignUp/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/about' element={<AboutPage/>}></Route>
     <Route path='/products' element={<ProductPage/>}></Route>
     <Route path='/support' element={<SupportPage/>}></Route>
     <Route path='/pricing' element={<PricingPage/>}></Route>
     <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
)
