import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Product} from './style'

export function ProductCard(props) {
    const price = props.price.toFixed(2).toString().replace('.', ',')
    
    return (
        <Product>
            <div>
                <img src={props.imageUrl} alt={props.name}/>
                <h3>{props.name}</h3>
                <p>R${price}</p>
            </div>
            <button onClick={props.onClick}>
                <AiOutlineShoppingCart/>
                Adicionar
            </button>
        </Product>
    )
}