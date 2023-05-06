import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyle'
import { useRequestData } from './hooks/useRequestData'
import { base_url } from './constants/constants'


function App() {
  const token = localStorage.getItem("token")
  
  if (token) {
    const [userData, isLoadingUserData, userError] = useRequestData(`${base_url}users/profile`, token)
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
