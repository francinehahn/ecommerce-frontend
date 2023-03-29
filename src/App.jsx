import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyle'
import { useRequestData } from './hooks/useRequestData'


function App() {
  const token = localStorage.getItem("token")
  
  if (token) {
    const [isLoadingUserData, userData, userError] = useRequestData("https://ecommerce-backend-8st9.onrender.com/users/profile", token)
    if (!isLoadingUserData && !userData && userError) {
      localStorage.removeItem("token")
    }
  }

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
