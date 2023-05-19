import React from 'react'
import {Container, Price, ProductInfo, Units} from './style'
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
            
            <ProductInfo>
                <p>{props.name}</p>

                <div>
                    <Units>
                        <button onClick={handleReduceUnit}>-</button>
                        <p>{props.units}x</p>
                        <button onClick={handleIncreaseUnit}>+</button>
                    </Units>
                    <BsTrash onClick={removeProduct}/>
                </div>
            </ProductInfo>

            <Price>R${(props.price * props.units).toFixed(2).replace(".", ",")}</Price>
        </Container>
    )
}