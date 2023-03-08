import axios from "axios"
import React, { useState } from "react"
import { Header } from "../../components/Header/Header"
import { Container } from "./style"
import { Loading } from "../../components/Loading/Loading"


export function RecoverPassword () {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [axiosError, setAxiosError] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const handleRecoverPass = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.patch('https://ecommerce-backend-8st9.onrender.com/users/recoverPassword', {email})
        .then(() => {
            setIsLoading(false)
            setSuccessMessage("Email enviado com sucesso!")
        })
        .catch(err => {
            setIsLoading(false)
            setAxiosError(err.response.data)
        })
    }

    return (
        <>
            <Header/>
            <Container>
                <h2>Esqueci a minha senha</h2>
                <p>Para recuperar o acesso à sua conta, informe o seu e-mail cadastrado</p>
                
                <form onSubmit={handleRecoverPass}>
                    <input type={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
                    <button>{!isLoading? "Enviar" : <Loading bgcolor={"white"}/>}</button>
                </form>

                <p id="error">{axiosError}</p>
                <p id="success">{successMessage}</p>
            </Container>
        </>    
    )
}