import React, { useState } from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"
import { FormContainer } from "./style"
import { Loading } from "../Loading/Loading"


export function ProductInfoForm (props) {
    const token = localStorage.getItem("token")
   
    const [message, setMessage] = useState("")
    const [form, onChange] = useForm({name: props.name, price: props.price, image_url: props.image_url})
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.put(`https://ecommerce-backend-8st9.onrender.com/products/${props.id}`, form, {
            headers: {
                token: token
            }
        })
        .then(() => {
            setIsLoading(false)
            setMessage("Informações editadas com sucesso!")
        })
        .catch(error => {
            setIsLoading(false)
            setMessage(error.response)
        })
    }

    return (
        props.showForm && (
            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome do produto</label>
                    <input type={"text"} name={"name"} value={form.name} onChange={onChange}/>
                </div>

                <div>
                    <label htmlFor="price">Preço</label>
                    <input type={"number"} name={"price"} value={form.price} onChange={onChange}/>
                </div>

                <div>
                    <label htmlFor="image_url">Url da imagem</label>
                    <input type={"text"} name={"image_url"} value={form.image_url} onChange={onChange}/>
                </div>

                <p>{message}</p>

                <span>
                    <button type="button" onClick={() => props.setShowForm(false)}>Voltar</button>
                    <button type="submit"> {isLoading? <Loading bgcolor={"white"}/> : "Enviar"}</button>
                </span>
            </FormContainer>
        )   
    )
}