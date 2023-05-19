import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"
import Swal from "sweetalert2"
import {CgSmileSad} from "react-icons/cg"

import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ProductInCart } from "../../components/ProductInCart/ProductInCart"
import { Loading } from "../../components/Loading/Loading"
import { base_url } from "../../constants/constants"

import {Button, Container, EmptyCart, TotalPrice} from './style'


export function Cart() {
    const token = localStorage.getItem("token")
    let productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products"))
    const [reload, setReload] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products"))
    }, [reload])

    const handlePayment = () => {
        if (!productsInCart || productsInCart.length === 0) {
            return
        } else if (token === null) {
            navigate("/login")
        } else {
            setIsLoading(true)
            const body = []
            
            for (let product of productsInCart) {
                body.push({
                    productId: product.id,
                    quantity: product.units
                })
            }

            axios.post(`${base_url}users/purchases`, body, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setIsLoading(false)
                localStorage.removeItem("products")
                setReload(!reload)
                Swal.fire("Pagamento realizado com sucesso!")
            }).catch(error => {
                Swal.fire(error.response.data)
                setIsLoading(false)
            })
        }
    }

    let totalPrice = 0
    const renderData = productsInCart && productsInCart.map((item, index) => {
        totalPrice += item.price * item.units
        return (
            <ProductInCart
                key={index}
                img={item.imageUrl}
                name={item.name}
                price={item.price}
                units={item.units}
                reload={reload}
                setReload={setReload}
            />
        )
    })

    return (
        <>
            <Header reload={reload}/>

            <Container>
                {renderData.length > 0 &&
                    <section>
                        {renderData}
                        <TotalPrice>Valor total: R${totalPrice.toFixed(2).toString().replace(".", ",")}</TotalPrice>
                    </section>
                }

                {(renderData.length === 0 || !productsInCart) && (
                    <EmptyCart>
                        <p>Carrinho vazio</p>
                        <CgSmileSad/>
                    </EmptyCart>
                )}

                {renderData.length > 0 && <Button onClick={handlePayment}>{isLoading? <Loading bgcolor={"white"}/> : "Finalizar a compra"}</Button>}
                
                <Footer/>
            </Container>
        </>
    )
}
