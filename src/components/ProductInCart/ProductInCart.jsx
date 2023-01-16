import React from 'react'
import {Container, Units} from './style'
import { BsTrash } from 'react-icons/bs'


export function ProductInCart(props) {    
    return (
        <Container> 
            <img src={props.img} alt={props.name}/>
            
            <Units>
                <button onClick={props.handleReduceUnit}>-</button>
                <p>{props.units}x</p>
                <button onClick={props.handleIncreaseUnit}>+</button>
            </Units>
            
            <p>{props.name}</p>
            <p>R${(props.price * props.units).toFixed(2).replace(".", ",")}</p>

            <BsTrash onClick={props.removeProduct}/>
        </Container>
    )
}