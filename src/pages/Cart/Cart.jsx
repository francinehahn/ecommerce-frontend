import React, { useEffect, useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ProductInCart } from "../../components/ProductInCart/ProductInCart"
import {Container, Button} from './style'
import {CgSmileSad} from "react-icons/cg"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Loading } from "../../components/Loading/Loading"


export function Cart() {
    const token = localStorage.getItem("token")
    let productsInCart = JSON.parse(localStorage.getItem("products")) !== null && JSON.parse(localStorage.getItem("products"))
    let products = productsInCart
    const [reload, setReload] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products"))
    }, [reload])

    const handleReduceUnit = (name) => {
        for (let product of products) {
            if (product.name === name && product.units > 1) {
                product.units -= 1
            }
        }

        localStorage.setItem("products", JSON.stringify(products))
        setReload(!reload)
    }

    const handleIncreaseUnit = (name) => {
        for (let product of products) {
            product.name === name? product.units += 1 : product.units += 0
        }

        localStorage.setItem("products", JSON.stringify(products))
        setReload(!reload)
    }

    const removeProduct = (name) => {
        products = productsInCart.filter(item => item.name !== name)

        localStorage.setItem("products", JSON.stringify(products))
        setReload(!reload)
    }
    
    const handlePayment = () => {
        if (!productsInCart || productsInCart.length === 0) {
            return
        } else if (token === null) {
            navigate("/login")
        } else {
            setIsLoading(true)
            const body = []
            
            for (let product of products) {
                body.push({
                    productId: product.id,
                    quantity: product.units
                })
            }
            console.log(body)

            axios.post('https://ecommerce-backend-8st9.onrender.com/purchases', body, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setIsLoading(false)
                localStorage.removeItem("products")
                setReload(!reload)
                alert("Pagamento realizado com sucesso!")
            }).catch(error => {
                alert(error.response.data)
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
                handleReduceUnit={() => handleReduceUnit(item.name)}
                handleIncreaseUnit={() => handleIncreaseUnit(item.name)}
                removeProduct={() => removeProduct(item.name)}
            />
        )
    })

    return (
        <>
            <Header reload={reload}/>
            <Container>
                {renderData}

                {(!productsInCart || productsInCart.length === 0) && (
                    <span>
                        <p>Carrinho vazio</p>
                        <CgSmileSad/>
                    </span>
                )}
                {totalPrice > 0 && <p id={"totalPrice"}>Valor total: R${totalPrice.toFixed(2).toString().replace(".", ",")}</p>}
            </Container>

            {productsInCart.length > 0 && <Button onClick={handlePayment}>{isLoading? <Loading bgcolor={"white"}/> : "Finalizar a compra"}</Button>}

            <Footer/>
        </>
    )
}
