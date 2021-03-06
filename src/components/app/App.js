import React from 'react'
import Header from '../header'
import Navbar from '../navbar'
import Features from '../features'
import Works from '../works'
import Contacts from '../contacts'
import Footer from '../footer'
import About from '../about'
import Remount from '../remount'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Features />
            <Works />
            <Remount />
            <Contacts />
            <Footer />
        </>
    )
}

export default App
