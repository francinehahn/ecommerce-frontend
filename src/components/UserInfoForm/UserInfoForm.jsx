import React from "react"
import axios from "axios"
import {FormContainer} from './style'
import { useState } from "react"
import { Loading } from "../Loading/Loading"
import { useForm } from "../../hooks/useForm"


export function UserInfoForm (props) {
    const token = localStorage.getItem("token")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange] = useForm({name: props.name, email: props.email}) 


    const handleEditUserInfo = (e) => {
        e.preventDefault()
        setIsLoading(true)
      
        axios.put(`https://ecommerce-backend-8st9.onrender.com/users/profile/edit`, form, {
            headers: {
                Authorization: token
            }
        }).then(() => {
            setMessage("Informações editadas com sucesso!")
            setIsLoading(false)
        }).catch(error => {
            setMessage(error.response.data)
            setIsLoading(false)
        })
    }

    return (
        props.showForm && (
            <FormContainer>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type={"text"} name="name" value={form.name} onChange={onChange}/>
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type={"email"} name="email" value={form.email} onChange={onChange}/>
                </div>

                <p>{message}</p>

                <span>
                    <button onClick={handleEditUserInfo}>{isLoading? <Loading bgcolor={"white"}/> : "Enviar"}</button>
                    <button type="button" onClick={() => props.setShowForm(false)}>Voltar</button>
                </span>
            </FormContainer>
        )   
    )
}