import React,{useState} from 'react'
import TodoItem from './TodoItem'
import './Todo.scss'

export default function Todo() {
    let data = [
        {id: 1, done: false, message: 'By milk'},
        {id: 2, done: false, message: 'Go walk with dog'},
        {id: 3, done: false, message: 'No watch tv'},
        {id: 4, done: false, message: 'Send message to work'},
    ]
    const [list, setData] = useState(data)
    
    function check(id){
        setData(list.map((item) =>{
                if(item.id === id){
                    item.done = !item.done
                }
                return item
            })
        )
        
    }
    return (
        <div className="todo-container">
            {list.map((item, index) => <TodoItem  data={item} id={index} key={index} check={check}/>)}
            
        </div>
    )
}
