import React from 'react'
import {Product} from './style'
import {BsFillPencilFill} from "react-icons/bs"


export function ProductRegisteredCard(props) {
    const price = props.price.toFixed(2).toString().replace('.', ',')

    return (
        <Product>
            <img src={props.image_url} alt={props.name}/>
            <div>
                <h4>{props.name}</h4>
                <p>Preço: R${price}</p>
            </div>
            <BsFillPencilFill onClick={props.onClick}/>
        </Product>
    )
}