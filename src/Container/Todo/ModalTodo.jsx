import React from 'react'
import './ModalTodo.scss'
export default function ModalTodo(props) {
    
    return (
        <div className="modal-todo">
            <p className="modal-todo-text">{props.text}</p>
            <button>OK</button>
        </div>
    )
}
