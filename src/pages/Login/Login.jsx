import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import {BsEye, BsEyeSlash} from 'react-icons/bs'

import { Header } from "../../components/Header/Header"
import {Loading} from '../../components/Loading/Loading'

import { base_url, validateEmail, validatePassword } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"

import {Container} from './style'
import { PasswordInput } from "../../globalStyle"


export function Login () {
    const { setIsLoggedIn } = useContext(AuthContext)
    const [reload, setReload] = useState(false)
    const [form, onChange] = useForm({email: "", password: ""})
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [axiosError, setAxiosError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [inputType, setInputType] = useState("password")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsLoading(true)
        setEmailError(false)
        setPasswordError(false)

        if (!validateEmail(form.email)) {
            setEmailError(true)
            setIsLoading(false)
        }

        if (!validatePassword(form.password)) {
            setPasswordError(true)
            setIsLoading(false)
        }

        if (validateEmail(form.email) && validatePassword(form.password)) {
            const body = {email: form.email, password: form.password}
            
            axios.post(`${base_url}users/login`, body)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                const now = new Date()
                const expirationTime = new Date(now)
                expirationTime.setHours(expirationTime.getHours() + 1)
                localStorage.setItem("expiration", expirationTime.toLocaleString())
                setIsLoggedIn(true)
                setReload(!reload)
                setEmailError(false)
                setPasswordError(false)
                setIsLoading(false)
                navigate("/")
            })
            .catch(error => {
                setAxiosError(error.response.data)
                setEmailError(false)
                setPasswordError(false)
                setIsLoading(false)
            })
        }
    }

    return (
        <>
            <Header reload={reload}/>
            
            <Container>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="maria@gmail.com" name="email" value={form.email} onChange={onChange}/>
                        {emailError && <span>E-mail no formato incorreto.</span>}
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <PasswordInput>
                            <input type={inputType} placeholder="**********" name="password" value={form.password} onChange={onChange}/>
                            {inputType === "text"? <BsEye onClick={() => setInputType("password")}/> : <BsEyeSlash onClick={() => setInputType("text")}/>}
                        </PasswordInput>
                        {passwordError && <span>A senha deve conter pelo menos 6 caracteres.</span>}
                    </div>

                    {(axiosError === "Email not found." || axiosError === "Incorrect password.") && <p>E-mail ou senha incorretos.</p>}

                    <button>{!isLoading? "Entrar" : <Loading bgcolor={"white"}/>}</button>
                </form>

                <Link id="recover-pass" to="/recuperar-senha">Esqueci a minha senha</Link>
                
                <div>
                    <p>Não possui uma conta?</p>
                    <Link to="/criar-conta">Clique aqui</Link>
                </div>
            </Container>
        </>
    )
}