import React from 'react'
import {Product} from './style'

export function ProductCard(props) {
    const price = props.price.toFixed(2).toString().replace('.', ',')
    
    return (
        <Product>
            <img src={props.imageUrl} alt={props.name}/>
            <div>
                <h3>{props.name}</h3>
                <p>Preço: R${price}</p>
                <button onClick={props.onClick}>Comprar</button>
            </div>
        </Product>
    )
}