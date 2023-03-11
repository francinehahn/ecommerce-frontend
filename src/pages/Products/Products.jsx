import React, { useState } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Loading } from '../../components/Loading/Loading'
import {ProductCard} from '../../components/ProductCard/ProductCard'
import { useRequestData } from '../../hooks/useRequestData'
import {Container} from './style'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import banner_desktop from "../../img/banner_desktop.png"
import banner_mobile from "../../img/banner_mobile.png"


export function Products() {
    const [searchedProduct, setSearchedProduct] = useState("")
    const [order, setOrder] = useState("asc")
    const [reload, setReload] = useState(false)
    const [page, setPage] = useState(1)

    const [allProducts] = useRequestData(`https://ecommerce-backend-8st9.onrender.com/products?size=10000000`)
    const allProductsLength = allProducts && allProducts.length
    const numberOfPages = Math.ceil(allProductsLength / 10)

    const [data, isLoading, error] = useRequestData(`https://ecommerce-backend-8st9.onrender.com/products?order=${order}&search=${searchedProduct}&page=${page}&size=10`)

    const handleOnClick = (id, name, price, imageUrl) => {
        setReload(!reload)
        
        if (JSON.parse(localStorage.getItem("products")) === null) {
            localStorage.setItem("products", JSON.stringify([]))
        }

        let productsInCart = JSON.parse(localStorage.getItem("products"))

        const productAlreadyInCart = productsInCart.filter(item => item.name === name)
        
        if (productAlreadyInCart.length > 0) {
            productsInCart.forEach(item => {
                if (item.name === productAlreadyInCart[0].name) {
                    item.units += 1 
                }
            })

            localStorage.setItem("products", JSON.stringify([...productsInCart]))
        } else {
            localStorage.setItem("products", JSON.stringify([...productsInCart, {id, name, price, imageUrl, units: 1}]))
        }
    }

    const handlePreviousPage = () => {
        if (page !== 1) {
            setPage(page - 1)
        }
    }

    const handleNextPage = () => {
        console.log(page)
        if (page !== numberOfPages) {
            setPage(page + 1)
        }
    }

    const renderData = data && data.map((item, index) => {
        return (
            <ProductCard key={index} name={item.name} price={item.price} imageUrl={item.image_url} onClick={() => handleOnClick(item.id, item.name, item.price, item.image_url)}/>
        )
    })

    return (
        <>
            <Header reload={reload}/>
            
            <Container>
                <form>
                    <input placeholder='Pesquisar por...' value={searchedProduct} onChange={e => setSearchedProduct(e.target.value)}/>
                    
                    <div>
                        <label>Ordenar:</label>
                        <select onChange={e => setOrder(e.target.value)}>
                            <option value="asc">A - Z</option>
                            <option value="desc">Z - A</option>
                        </select>
                    </div>
                </form>

                {!searchedProduct && <img id="banner_desktop" src={banner_desktop} alt="Imagem promocional do dia do consumidor"/>}
                {!searchedProduct && <img id="banner_mobile" src={banner_mobile} alt="Imagem promocional do dia do consumidor"/>}

                {isLoading && <Loading bgcolor={"purple"}/>}
                {!isLoading && !data && error && <p>{error}</p>}

                <section>
                    {!isLoading && data && renderData}
                </section>

                {!isLoading &&
                    (
                        <span>
                            <AiOutlineArrowLeft onClick={handlePreviousPage}/>
                            <p>{page}</p>
                            <AiOutlineArrowRight onClick={handleNextPage}/>
                        </span>
                    )
                }
            </Container>

            <Footer/>
        </>
    )
}

