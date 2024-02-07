import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './login';
import SignupPage from './signup';
import ForgotPasswordPage from './forgot';
import MessagingApp from './chat';
const Page=()=>
{
   return(
    <>
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}/>
        <Route path='/home' element={<MessagingApp/>}/>
    </Routes>
    </>
   )
}
export default Page;