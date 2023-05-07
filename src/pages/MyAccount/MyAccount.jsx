import React, {useState} from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { Container, PersonalInfo, Purchases, ProductsRegistered, Sales } from "./Style"
import {Loading} from '../../components/Loading/Loading'
import { PurchaseCard } from "../../components/PurchaseCard/PurchaseCard"
import {ProductRegisteredCard} from '../../components/ProductRegisteredCard/ProductRegisteredCard'
import {BsFillPencilFill, BsPlusCircle} from "react-icons/bs"
import { UserInfoForm } from "../../components/UserInfoForm/UserInfoForm"
import { ProductInfoForm } from "../../components/ProductInfoForm/ProductInfoForm"
import { useNavigate } from "react-router-dom"
import { base_url } from "../../constants/constants"


export function MyAccount () {
    useProtectedPage()

    const token = localStorage.getItem("token")
    
    const [showUserForm, setShowUserForm] = useState(false)
    const [showProductForm, setShowProductForm] = useState(false)

    const [user, isLoadingUser, errorUser] = useRequestData(`${base_url}users/profile`, token)
    const [purchases, isLoadingPurchases, errorPurchases] = useRequestData(`${base_url}users/purchases`, token)
    const [sales, isLoadingSales, errorSales] = useRequestData(`${base_url}users/sales`, token)
    const [productsRegistered, isLoadingProducts, errorProducts] = useRequestData(`${base_url}products/user`, token)
    const [productToBeEdited, setProductToBeEdited] = useState({id: "", name: "", price: 0, imageUrl: ""})

    const navigate = useNavigate()
    
    const renderPurchases = purchases && purchases.map((item, index) => {
        return <PurchaseCard
                    key={index}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.total_price}
                    date={item.created_at}
                />
    })

    const renderSales = sales && sales.map((item, index) => {
        return <PurchaseCard
                    key={index}
                    name={item.product_name}
                    quantity={item.quantity}
                    price={item.total_price}
                    date={item.created_at}
                />
    })
    
    const renderProductsRegistered = productsRegistered && productsRegistered.map((item, index) => {
        return <ProductRegisteredCard
                    key={index}
                    name={item.name}
                    imageUrl={item.image_url}
                    price={item.price}
                    onClick={() => {
                        setProductToBeEdited({id: item.id, name: item.name, price: item.price, imageUrl: item.image_url})
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
                    
                    {!showUserForm && !isLoadingUser && user && (
                        <div>
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
                        </div>
                    )}


                    {showUserForm && <UserInfoForm showForm={showUserForm} setShowForm={setShowUserForm} name={user.name} email={user.email}/>}

                    {!showUserForm && isLoadingUser && <Loading bgcolor={"purple"}/>}

                    {!showUserForm && !isLoadingUser && !user && errorUser && <p>{errorUser}</p>}
                </PersonalInfo>

                <Purchases>
                    <h3>Minhas compras</h3>
                    {isLoadingPurchases && <Loading bgcolor={"purple"}/>}
                    {!isLoadingPurchases && !purchases && errorPurchases && <p>Você não realizou nenhuma compra ainda.</p>}
                    {!isLoadingPurchases && purchases && (
                        <div id="purchases">
                            {renderPurchases}
                        </div>
                    )}
                </Purchases>
                
                <ProductsRegistered>
                    <span>
                        <h3>Produtos cadastrados</h3>
                        <BsPlusCircle onClick={() => navigate("/cadastrar-produto")}/>
                    </span>

                    {!showProductForm && isLoadingProducts && <Loading bgcolor={"purple"}/>}
                    {!showProductForm && !isLoadingProducts && !productsRegistered && errorProducts && <p>Você não cadastrou nenhum produto.</p>}
                    {!showProductForm && !isLoadingProducts && productsRegistered && (
                        <div id="productsRegistered">
                            {renderProductsRegistered}
                        </div>
                    )}

                    {showProductForm && <ProductInfoForm
                        showForm={showProductForm}
                        setShowForm={setShowProductForm}
                        id={productToBeEdited.id}
                        name={productToBeEdited.name}
                        price={productToBeEdited.price}
                        imageUrl={productToBeEdited.imageUrl}
                    />}
                </ProductsRegistered>
                
                <Sales>
                    <h3>Minhas vendas</h3>
                    {isLoadingSales && <Loading bgcolor={"purple"}/>}
                    {!isLoadingSales && !sales && errorSales && <p>Você não realizou nenhuma venda ainda.</p>}
                    {!isLoadingSales && sales && (
                        <div id="sales">
                            {renderSales}
                        </div>
                    )}
                </Sales>
            </Container>

            <Footer/>
        </>
    )
}