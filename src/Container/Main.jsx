import React from 'react'
import './Main.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import FirstBlock from './Content/FIrst-block/FirstBlock'
const Main = () => {
    return (
        <div className="main-container">
            <Header/>
            <div className="container">
                <FirstBlock/>
            </div>
            <Footer/>
        </div>
    )
}
export default Main
