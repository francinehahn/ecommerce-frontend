import React from "react"
import axios from "axios"
import {FormContainer, PasswordInput} from './style'
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { Loading } from "../Loading/Loading"
import {BsEye, BsEyeSlash} from 'react-icons/bs'


export function UserInfoForm (props) {
    const id = localStorage.getItem("id")
    const token = localStorage.getItem("token")

    const [form, onChange] = useForm({email: props.email, password: props.password})
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [inputType, setInputType] = useState("password")


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        axios.put(`https://labeccomerce2.onrender.com/users/${id}/account`, form, {
            headers: {
                token: token
            }
        }).then(() => {
            setMessage("Informações editadas com sucesso!")
            setIsLoading(false)
        }).catch(error => {
            setMessage(error.response)
            setIsLoading(false)
        })
    }

    return (
        props.showForm && (
            <FormContainer onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="email">E-mail</label>
                    <input type={"email"} name={"email"} value={form.email} onChange={onChange}/>
                </span>

                <span>
                    <label htmlFor="password">Password</label>
                    <PasswordInput>
                        <input type={inputType} name={"password"} value={form.password} onChange={onChange}/>
                        {inputType === "text"? <BsEye onClick={() => setInputType("password")}/> : <BsEyeSlash onClick={() => setInputType("text")}/>}
                    </PasswordInput>
                </span>

                <p>{message}</p>

                <div>
                    <button type="button" onClick={() => props.setShowForm(false)}>Voltar</button>
                    <button type="submit"> {isLoading? <Loading bgcolor={"white"}/> : "Enviar"}</button>
                </div>
            </FormContainer>
        )   
    )
}