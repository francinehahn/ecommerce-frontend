import React, { useContext, useEffect, useState } from 'react'
import {HeaderSection, NavDesktop, MobileSymbol, NavMobile} from './style'
import logo from '../../img/logo_LabEcommerce.png'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { AuthContext } from '../../context/AuthContext'

export function Header(props) {
    const { isLoggedIn } = useContext(AuthContext)
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    let productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products")).length

    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products")).length
    }, [props.reload])

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("expiration")
        props.setReload(!props.reload)
    }

    const nav = () => {
        return (
            <>
                <Link to="/">Home</Link>
                {isLoggedIn && <Link to="/minha-conta">Minha Conta</Link>}
                <span>
                    <Link to="/carrinho">Carrinho</Link>
                    <AiOutlineShoppingCart/>
                    {JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products")).length > 0 &&
                    <p>{productsInCart}</p>}
                </span>
                {isLoggedIn && <Link to="/" onClick={handleLogout}>Logout</Link>}
                {!isLoggedIn && <Link to="/login">Login</Link>}
            </>
        )
    }

    return (
        <HeaderSection>
            <img src={logo} alt="Logo do ecommerce"/>
            <NavDesktop>
                {nav()}
            </NavDesktop>

            <MobileSymbol onClick={() => setShowMobileMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </MobileSymbol>

            {showMobileMenu && (
                <NavMobile>
                    <button onClick={() => setShowMobileMenu(false)}>X</button>
                    <div>{nav()}</div>
                </NavMobile>
            )}
        </HeaderSection>
    )
}