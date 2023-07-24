import React from 'react'
import { Router } from './routes/Router'
import { GlobalStyle } from './globalStyle'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <GlobalStyle/>
      <Router/>
    </AuthProvider>
  )
}

export default App
