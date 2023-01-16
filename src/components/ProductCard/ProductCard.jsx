import React from 'react'
import {Product} from './style'

export function ProductCard(props) {
    const price = props.price.toFixed(2).toString().replace('.', ',')
    
    return (
        <Product>
            <img src={props.image_url} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>Preço: R${price}</p>
            <button onClick={props.onClick}>Comprar</button>
        </Product>
    )
}