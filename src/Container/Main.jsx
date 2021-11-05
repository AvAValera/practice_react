import React from 'react'
import './Main.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Todo from './Todo/Todo'

const Main = () => {
    return (
        <div className="main-container">
            <Header/>
            <Todo />
            <Footer/>
        </div>
    )
}
export default Main
