import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { validateEmail, validatePassword } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import {Loading} from '../../components/Loading/Loading'
import {Container, PasswordInput} from './style'
import {BsEye, BsEyeSlash} from 'react-icons/bs'


export function Login () {
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
            
            axios.post('https://ecommerce-backend-8st9.onrender.com/users/login', body)
            .then(response => {
                localStorage.setItem("token", response.data.token)
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

                    {axiosError === "Email not found." && <p>E-mail não encontrado.</p>}
                    {axiosError === "Incorrect password." && <p>Senha incorreta.</p>}

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