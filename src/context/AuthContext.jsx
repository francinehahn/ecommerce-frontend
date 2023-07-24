import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logoutUser = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('expiration')
        setIsLoggedIn(false)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            const expirationTime = localStorage.getItem('expiration')

            if (new Date().toLocaleString() >= expirationTime.toLocaleString()) {
                logoutUser()
            } else {
                setIsLoggedIn(true)
                setTimeout(logoutUser, 3600000) //1 hour
            }
        }
    }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }
