import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { base_url, validateEmail, validateName, validatePassword } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { Container } from "./style"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { PasswordInput } from "../../globalStyle"


export function SignUp () {
    const [form, onChange] = useForm({name: "", email: "", password: "", confirmPassword: ""})
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [differentPasswordError, setDifferentPasswordError] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [axiosError, setAxiosError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [inputType, setInputType] = useState("password")
    const [inputType2, setInputType2] = useState("password")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        
        setIsLoading(true)
        setNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setDifferentPasswordError(false)
        setAxiosError("")

        if (!validateName(form.name)) {
            setNameError(true)
            setIsLoading(false)
        }
        
        if (!validateEmail(form.email)) {
            setEmailError(true)
            setIsLoading(false)
        }
        
        if (!validatePassword(form.password)) {
            setPasswordError(true)
            setIsLoading(false)
        }
        
        if (form.password !== form.confirmPassword) {
            setDifferentPasswordError(true)
            setIsLoading(false)
        }

        if (validateName(form.name) && validatePassword(form.password) && form.password === form.confirmPassword) {
            const body = {name: form.name, email: form.email, password: form.password}

            axios.post(`${base_url}users/signup`, body)
            .then(() => {
                setSuccessMessage("Conta criada com sucesso!")
                setIsLoading(false)
                setTimeout(() => navigate("/login"), 2500)
            }).catch(error => {
                setAxiosError(error.response.data)
                setIsLoading(false)
            })
        }
    }

    return (
        <>
            <Header/>

            <Container>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" placeholder="Digite o seu nome completo" name="name" value={form.name} onChange={onChange}/>
                        {nameError && <p>Deve haver um espaço entre o seu nome e o sobrenome.</p>}
                    </div>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" placeholder="maria@gmail.com" name="email" value={form.email} onChange={onChange}/>
                        {emailError && <p>E-mail no formato incorreto.</p>}
                    </div>

                    <div>
                        <label htmlFor="password">Senha</label>
                        <PasswordInput>
                            <input type={inputType} placeholder="**********" name="password" value={form.password} onChange={onChange}/>
                            {inputType === "text"? <BsEye onClick={() => setInputType("password")}/> : <BsEyeSlash onClick={() => setInputType("text")}/>}
                        </PasswordInput>
                        {passwordError && <p>A senha deve conter no mínimo 6 caracteres.</p>}
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirme a senha</label>
                        <PasswordInput>
                            <input type={inputType2} placeholder="**********" name="confirmPassword" value={form.confirmPassword} onChange={onChange}/>
                            {inputType2 === "text"? <BsEye onClick={() => setInputType2("password")}/> : <BsEyeSlash onClick={() => setInputType2("text")}/>}
                        </PasswordInput>
                        {differentPasswordError && <p>A senha deve ser a mesma que a digitada anteriormente.</p>}
                    </div>
                    
                    <button>{!isLoading? "Criar conta" : <Loading bgcolor={"white"}/>}</button>

                    <span id="successMessage">{successMessage}</span>
                    <span id="axiosError">{axiosError}</span>
                </form>
            </Container>
        </>
    )
}