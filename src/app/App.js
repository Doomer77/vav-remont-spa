import React from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Features from '../components/features'
import Works from '../components/works'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Works />
        </>
    )
}

export default App
