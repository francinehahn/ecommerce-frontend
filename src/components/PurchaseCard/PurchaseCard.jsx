import React from "react"
import { Container } from "./style"


export function PurchaseCard (props) {
    return (
        <Container>
            <p>
                <strong>Produto: </strong>
                {props.name}
            </p>
            <p>
                <strong>Quantidade: </strong>
                {props.quantity}
            </p>
            <p>
                <strong>Preço total: </strong>
                {`R$ ${props.price.toFixed(2).replace(".", ",")}`}
            </p>
            <p>
                <strong>Data da compra: </strong>
                {props.date.toString().slice(0, 10).split("-").reverse().join("-")}
            </p>
        </Container>
    )
}