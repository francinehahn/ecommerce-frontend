import axios from "axios"
import React, { useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { validateImageUrl, validateProductName, validateProductPrice } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { FormContainer } from "./style"


export function RegisterProduct () {
    useProtectedPage()

    const [form, onChange, clearInputs] = useForm({name: "", price: "", image_url: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [invalidNameMessage, setInvalidNameMessage] = useState("")
    const [invalidPriceMessage, setInvalidPriceMessage] = useState("")
    const [invalidUrlMessage, setInvalidUrlMessage] = useState("")
    
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")

    const handleRegitration = (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (!validateProductName(form.name)) {
            setInvalidNameMessage("O nome do produto deve ter entre 10 e 255 caracteres.")
            setIsLoading(false)
        }

        if (!validateProductPrice(form.price)) {
            setInvalidPriceMessage("O preço do produto deve ser maior do que zero.")
            setIsLoading(false)
        }

        if (!validateImageUrl(form.image_url)) {
            setInvalidUrlMessage("Url inválida.")
            setIsLoading(false)
        }

        if (validateProductName(form.name) && validateProductPrice(form.price) && validateImageUrl(form.image_url)) {
            axios.post(`https://labeccomerce2.onrender.com/users/${id}/products`, form, {
                headers: {
                    token: token
                }
            }).then(() => {
                setIsLoading(false)
                clearInputs()
                setInvalidNameMessage("")
                setInvalidPriceMessage("")
                setInvalidUrlMessage("")
                setMessage("Produto cadastrado com sucesso!")
            }).catch(error => {
                setIsLoading(false)
                clearInputs()
                setInvalidNameMessage("")
                setInvalidPriceMessage("")
                setInvalidUrlMessage("")
                setMessage(error.response)
            })
        }
    }

    return (
        <>
            <Header/>

            <FormContainer>
                <h3>Cadastrar novo produto:</h3>
                <div>
                    <label htmlFor="name">Nome do produto</label>
                    <input type={'text'} placeholder="Vestido vermelho tamanho 36" name="name" value={form.name} onChange={onChange}/>
                    <p>{invalidNameMessage}</p>
                </div>

                <div>
                    <label htmlFor="price">Preço</label>
                    <input type={'number'} placeholder="129,90" name="price" value={form.price} onChange={onChange}/>
                    <p>{invalidPriceMessage}</p>
                </div>

                <div>
                    <label htmlFor="image_url">Url da imagem</label>
                    <input type={'url'} placeholder="https://www.imagem.com.br" name="image_url" value={form.image_url} onChange={onChange}/>
                    <p>{invalidUrlMessage}</p>
                </div>

                <p>{message}</p>

                <button onClick={handleRegitration}>{isLoading? <Loading bgcolor={"white"}/> : "Cadastrar"}</button>
            </FormContainer>

            <Footer/>
        </>
    )
}