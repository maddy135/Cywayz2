import React from 'react'
import { Navbar, Hero, Article, Mentee, Sponsor, Getstared, Footer } from './index'
import { BrowserRouter } from 'react-router-dom';

function Home() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <Hero />
            <Article />
            <Mentee />
            <Sponsor />
            <Getstared />
            <Footer />
        </>
    )
}

export default Home
