import React, {useState} from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { Container, PersonalInfo, PurchasesAndSales } from "./Style"
import {Loading} from '../../components/Loading/Loading'
import { PurchaseCard } from "../../components/PurchaseCard/PurchaseCard"
import {ProductRegisteredCard} from '../../components/ProductRegisteredCard/ProductRegisteredCard'
import {BsFillPencilFill} from "react-icons/bs"
import { UserInfoForm } from "../../components/UserInfoForm/UserInfoForm"
import { ProductInfoForm } from "../../components/ProductInfoForm/ProductInfoForm"
import {BsPlusCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom"


export function MyAccount () {
    useProtectedPage()

    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    
    const [showUserForm, setShowUserForm] = useState(false)
    const [showProductForm, setShowProductForm] = useState(false)

    const [user, isLoadingUser, errorUser] = useRequestData(`https://labeccomerce2.onrender.com/users/${id}`, token)
    const [purchases, isLoadingPurchases, errorPurchases] = useRequestData(`https://labeccomerce2.onrender.com/users/${id}/purchases`, token)
    const [sales, isLoadingSales, errorSales] = useRequestData(`https://labeccomerce2.onrender.com/users/${id}/sales`, token)
    const [productsRegistered, isLoadingProducts, errorProducts] = useRequestData(`https://labeccomerce2.onrender.com/users/${id}/products`, token)
    const [productToBeEdited, setProductToBeEdited] = useState({name: "", price: 0, image_url: ""})

    const navigate = useNavigate()
    
    const renderPurchases = purchases && purchases.length > 0 && purchases.map((item, index) => {
        return <PurchaseCard
                    key={index}
                    name={item.product_name}
                    quantity={item.quantity}
                    price={item.total_price}
                    date={item.created_at}
                />
    })

    const renderSales = sales && sales.length > 0 && sales.map((item, index) => {
        return <PurchaseCard
                    key={index}
                    name={item.product_name}
                    quantity={item.quantity}
                    price={item.total_price}
                    date={item.created_at}
                />
    })
    
    const renderProductsRegistered = productsRegistered && productsRegistered !== "The user has not registered any products yet." &&
        productsRegistered.map((item, index) => {
        return <ProductRegisteredCard
                    key={index}
                    name={item.name}
                    image_url={item.image_url}
                    price={item.price}
                    onClick={() => {
                        setProductToBeEdited({id: item.id, name: item.name, price: item.price, image_url: item.image_url})
                        setShowProductForm(true)
                    }}
                />
    })

    return (
        <>
            <Header/>

            <Container>
                <PersonalInfo>
                    <span>
                        <h2>Editar as minhas informações</h2>
                        <BsFillPencilFill onClick={() => setShowUserForm(true)}/>
                    </span>

                    {showUserForm && <UserInfoForm showForm={showUserForm} setShowForm={setShowUserForm} email={user.email} password={user.password}/>}

                    {!showUserForm && isLoadingUser && <Loading bgcolor={"purple"}/>}

                    {!showUserForm && !isLoadingUser && errorUser && <p>{errorUser}</p>}

                    {!showUserForm && !isLoadingUser && user && (
                        <>
                            <div>
                                <p><strong>Nome:</strong></p>
                                <p>{user.name}</p>
                            </div>

                            <div>
                                <p><strong>E-mail:</strong></p>
                                <p>{user.email}</p>
                            </div>

                            <div>
                                <p><strong>Senha:</strong></p>
                                <p>*************</p>
                            </div>
                        </>
                    )}
                </PersonalInfo>

                <PurchasesAndSales>
                    <h3>Minhas compras</h3>
                    {isLoadingPurchases && <Loading bgcolor={"purple"}/>}
                    {!isLoadingPurchases && errorPurchases && <p>{errorPurchases}</p>}
                    {!isLoadingPurchases && purchases && purchases.length === 0 && <p>Você não realizou nenhuma compra ainda.</p>}
                    {!isLoadingPurchases && purchases && purchases.length > 0 && (
                        <section>
                            {renderPurchases}
                        </section>
                    )}

                    
                    <span>
                        <h3>Produtos cadastrados</h3>
                        <BsPlusCircle onClick={() => navigate("/cadastrar-produto")}/>
                    </span>

                    {!showProductForm && isLoadingProducts && <Loading bgcolor={"purple"}/>}
                    {!showProductForm && !isLoadingProducts && errorProducts && <p>{errorProducts}</p>}
                    {!showProductForm && !isLoadingProducts && productsRegistered && productsRegistered === "The user has not registered any products yet." && <p>Você não cadastrou nenhum produto.</p>}
                    {!showProductForm && !isLoadingProducts && productsRegistered && productsRegistered.length > 0 && (
                        <section>
                            {renderProductsRegistered}
                        </section>
                    )}

                    {showProductForm && <ProductInfoForm
                        showForm={showProductForm}
                        setShowForm={setShowProductForm}
                        id={productToBeEdited.id}
                        name={productToBeEdited.name}
                        price={productToBeEdited.price}
                        image_url={productToBeEdited.image_url}
                    />}

                    <h3>Minhas vendas</h3>
                    {isLoadingSales && <Loading bgcolor={"purple"}/>}
                    {!isLoadingSales && errorSales && <p>{errorSales}</p>}
                    {!isLoadingSales && sales && sales.length === 0 && <p>Você não realizou nenhuma venda ainda.</p>}
                    {!isLoadingSales && sales && sales.length > 0 && (
                        <section>
                            {renderSales}
                        </section>
                    )}
                </PurchasesAndSales>
            </Container>

            <Footer/>
        </>
    )
}