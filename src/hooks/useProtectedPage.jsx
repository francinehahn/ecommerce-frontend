import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"


export function useProtectedPage () {
    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        !isLoggedIn && navigate("/login") 
    }, [])
}