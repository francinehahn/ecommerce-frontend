import React, { useEffect, useState } from 'react'
import {HeaderSection, NavDesktop, MobileSymbol, NavMobile} from './style'
import logo from '../../img/logo_LabEcommerce.png'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useRequestData } from '../../hooks/useRequestData'
import { base_url } from '../../constants/constants'

export function Header(props) {
    let productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products")).length
    const token = localStorage.getItem("token")
    
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [userData, isLoadingUserData, userError] = useRequestData(`${base_url}users/profile`, token)

    if (!isLoadingUserData && !userData && userError) {
        localStorage.removeItem("token")
    }
    

    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products")).length
    }, [props.reload])

    const handleLogout = () => {
        localStorage.removeItem("token")
        props.setReload(!props.reload)
    }

    const nav = () => {
        return (
            <>
                <Link to="/">Home</Link>
                {userData && <Link to="/minha-conta">Minha Conta</Link>}
                <span>
                    <Link to="/carrinho">Carrinho</Link>
                    <AiOutlineShoppingCart/>
                    {JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products")).length > 0 &&
                    <p>{productsInCart}</p>}
                </span>
                {userData && <Link to="/" onClick={handleLogout}>Logout</Link>}
                {!userData && <Link to="/login">Login</Link>}
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