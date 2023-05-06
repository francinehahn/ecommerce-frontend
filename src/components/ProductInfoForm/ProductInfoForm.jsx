import React, { useState } from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"
import { FormContainer } from "./style"
import { Loading } from "../Loading/Loading"
import { base_url } from "../../constants/constants"
import Swal from "sweetalert2"


export function ProductInfoForm (props) {
    const token = localStorage.getItem("token")
   
    const [message, setMessage] = useState("")
    const [form, onChange] = useForm({name: props.name, price: props.price, imageUrl: props.imageUrl})
    const [isLoading, setIsLoading] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.put(`${base_url}products/${props.id}`, form, {
            headers: {
                Authorization: token
            }
        }).then(() => {
            setIsLoading(false)
            setMessage("Informações editadas com sucesso!")
        })
        .catch(error => {
            setIsLoading(false)
            Swal.fire(error.response.data)
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
                    <label htmlFor="imageUrl">Url da imagem</label>
                    <input type={"url"} name={"imageUrl"} value={form.imageUrl} onChange={onChange}/>
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