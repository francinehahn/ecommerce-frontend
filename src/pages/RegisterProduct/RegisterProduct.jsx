import axios from "axios"
import React, { useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { base_url, validateImageUrl, validateProductName } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { FormContainer } from "./style"
import Swal from "sweetalert2"


export function RegisterProduct () {
    useProtectedPage()

    const [form, onChange, clearInputs] = useForm({name: "", price: "", imageUrl: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [invalidNameMessage, setInvalidNameMessage] = useState("")
    const [invalidPriceMessage, setInvalidPriceMessage] = useState("")
    const [invalidUrlMessage, setInvalidUrlMessage] = useState("")
    
    const token = localStorage.getItem("token")

    const handleRegitration = (e) => {
        e.preventDefault()
        setIsLoading(true)

        if (!validateProductName(form.name)) {
            setInvalidNameMessage("O nome do produto deve ter entre 10 e 255 caracteres.")
            setIsLoading(false)
        }

        if (Number(form.price) <= 0) {
            setInvalidPriceMessage("O preço do produto deve ser maior do que zero.")
            setIsLoading(false)
        }

        if (!validateImageUrl(form.imageUrl)) {
            setInvalidUrlMessage("Url inválida.")
            setIsLoading(false)
        }

        if (validateProductName(form.name) && Number(form.price) > 0 && validateImageUrl(form.imageUrl)) {
            axios.post(`${base_url}products`, form, {
                headers: {
                    Authorization: token
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
                setInvalidNameMessage("")
                setInvalidPriceMessage("")
                setInvalidUrlMessage("")
                Swal.fire(error.response.data)
            })
        }
    }

    return (
        <>
            <Header/>

            <FormContainer>
                <h3>Cadastrar novo produto:</h3>
                <form>
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
                        <label htmlFor="imageUrl">Url da imagem</label>
                        <input type={'url'} placeholder="https://www.imagem.com.br" name="imageUrl" value={form.imageUrl} onChange={onChange}/>
                        <p>{invalidUrlMessage}</p>
                    </div>

                    <p>{message}</p>

                    <button onClick={handleRegitration}>{isLoading? <Loading bgcolor={"white"}/> : "Cadastrar"}</button>
                </form>
            </FormContainer>
        </>
    )
}