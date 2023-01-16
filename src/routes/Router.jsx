import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Products} from '../pages/Products/Products'
import {Cart} from '../pages/Cart/Cart'
import { Login } from '../pages/Login/Login'
import { SignUp } from '../pages/SignUp/SignUp'
import { MyAccount } from '../pages/MyAccount/MyAccount'
import { RegisterProduct } from '../pages/RegisterProduct/RegisterProduct'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Products/>}/>
                <Route path={"/minha-conta"} element={<MyAccount/>}/>
                <Route path={"/carrinho"} element={<Cart/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/criar-conta"} element={<SignUp/>}/>
                <Route path={"/cadastrar-produto"} element={<RegisterProduct/>}/>
            </Routes>        
        </BrowserRouter>
    )
}