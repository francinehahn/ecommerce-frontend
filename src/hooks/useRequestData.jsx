import axios from "axios"
import { useState, useEffect } from "react"


export function useRequestData (url, token="") {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get(url, {headers: {Authorization: token}}).then(
            response => {
                setIsLoading(false)
                setData(response.data)
            }
        ).catch(err => {
            setIsLoading(false)
            setError(err.response.data)
        })
    }, [url, token])
    
    return [data, isLoading, error]
}