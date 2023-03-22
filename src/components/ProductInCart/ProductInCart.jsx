import React from 'react'
import {Container, Units} from './style'
import { BsTrash } from 'react-icons/bs'


export function ProductInCart(props) {
    let productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products"))

    const handleReduceUnit = () => {
        for (let product of productsInCart) {
            if (product.name === props.name && product.units > 1) {
                product.units -= 1
            }
        }

        localStorage.setItem("products", JSON.stringify(productsInCart))
        props.setReload(!props.reload)
    }

    const handleIncreaseUnit = () => {
        for (let product of productsInCart) {
            product.name === props.name? product.units += 1 : product.units += 0
        }

        localStorage.setItem("products", JSON.stringify(productsInCart))
        props.setReload(!props.reload)
    }

    const removeProduct = () => {
        productsInCart = productsInCart.filter(item => item.name !== props.name)

        localStorage.setItem("products", JSON.stringify(productsInCart))
        props.setReload(!props.reload)
    }

    return (
        <Container> 
            <img src={props.img} alt={props.name}/>
            
            <Units>
                <button onClick={handleReduceUnit}>-</button>
                <p>{props.units}x</p>
                <button onClick={handleIncreaseUnit}>+</button>
            </Units>
            
            <p>{props.name}</p>
            <p>R${(props.price * props.units).toFixed(2).replace(".", ",")}</p>

            <BsTrash onClick={removeProduct}/>
        </Container>
    )
}