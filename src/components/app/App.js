import React from 'react'
import Header from '../header'
import Navbar from '../navbar'
import Features from '../features'
import Works from '../works'
import Contacts from '../contacts'
import Footer from '../footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Works />
            <Contacts />
            <Footer />
        </>
    )
}

export default App
