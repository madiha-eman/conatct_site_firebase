import React from 'react'
import AboutUs from './aboutUs'
import ContactUs from './contact'
import Footer from './footer'
import Header from './header'
import Home from './home'
import Navbar from './navbar'
import Services from './services'

const HomePages = () => {
    return (
        <div>
       <Header />
       <Home />
       <AboutUs />
       <Services />
       <ContactUs />
       <Footer/>
        </div>
    )
}

export default HomePages
