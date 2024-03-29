import React from "react"
import axios from "axios"
import {FormContainer} from './style'
import { useState } from "react"
import { Loading } from "../Loading/Loading"
import { useForm } from "../../hooks/useForm"
import { base_url } from "../../constants/constants"
import Swal from "sweetalert2"


export function UserInfoForm (props) {
    const token = localStorage.getItem("token")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange] = useForm({name: props.name, email: props.email}) 


    const handleEditUserInfo = (e) => {
        e.preventDefault()
        setIsLoading(true)
      
        axios.put(`${base_url}users/profile/edit`, form, {
            headers: {
                Authorization: token
            }
        }).then(() => {
            setMessage("Informações editadas com sucesso!")
            props.setReload(!props.reload)
            setIsLoading(false)
        }).catch(error => {
            setIsLoading(false)
            Swal.fire(error.response.data)
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
                    <button type="button" onClick={() => props.setShowForm(false)}>Voltar</button>
                    <button onClick={handleEditUserInfo}>{isLoading? <Loading bgcolor={"white"}/> : "Enviar"}</button>
                </span>
            </FormContainer>
        )   
    )
}