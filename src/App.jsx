import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyle'


function App() {

  function closingCode() {
    localStorage.removeItem("token")
    return null
  }

  window.onbeforeunload = closingCode()

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  )
}

export default App
