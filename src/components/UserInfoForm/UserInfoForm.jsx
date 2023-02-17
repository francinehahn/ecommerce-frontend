import React from "react"
import axios from "axios"
import {FormContainer} from './style'
import { useState } from "react"
import { Loading } from "../Loading/Loading"


export function UserInfoForm (props) {
    const token = localStorage.getItem("token")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState(props.email)


    const handleEditEmail = (e) => {
        setIsLoading(true)
        const body = {
            email: email
        }
        axios.put(`https://ecommerce-backend-8st9.onrender.com/users/profile/edit`, body, {
            headers: {
                Authorization: token
            }
        }).then(() => {
            setMessage("Email editado com sucesso!")
            setIsLoading(false)
        }).catch(error => {
            setMessage(error.response)
            setIsLoading(false)
        })
    }

    const handleEditPassword = (e) => {
        setIsLoading(true)
        if (password === "") {
            alert("A nova senha não pode estar em branco.")
            setIsLoading(false)
            return
        }

        const body = {
            password: password
        }

        axios.put(`https://ecommerce-backend-8st9.onrender.com/users/profile/edit`, body, {
            headers: {
                Authorization: token
            }
        }).then(() => {
            setMessage("Senha editada com sucesso!")
            setIsLoading(false)
        }).catch(error => {
            setMessage(error.response)
            setIsLoading(false)
        })
    }

    return (
        props.showForm && (
            <FormContainer>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <span>
                        <input type={"email"} value={props.email} onChange={e => setEmail(e.target.value)}/>
                        <button type="button" onClick={handleEditEmail}>{isLoading? <Loading bgcolor={"white"}/> : "Alterar"}</button>
                    </span>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <span>
                        <input type={"password"} placeholder="***********" value={password} onChange={e => setPassword(e.target.value)}/>
                        <button type="button" onClick={handleEditPassword}>{isLoading? <Loading bgcolor={"white"}/> : "Alterar"}</button>
                    </span>
                </div>

                <p>{message}</p>

                <button type="button" onClick={() => props.setShowForm(false)}>Voltar</button>
            </FormContainer>
        )   
    )
}