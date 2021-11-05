import React,{useState} from 'react'
import TodoItem from './TodoItem'
import './Todo.scss'
import MyContext from '../context'
import ModalTodo from './ModalTodo'

export default function Todo() {
    let data = [
        {id: 1, done: false, message: 'By milk'},
        {id: 2, done: false, message: 'Go walk with dog'},
        {id: 3, done: false, message: 'No watch tv'},
        {id: 4, done: false, message: 'Send message to work'},
    ]
    const [list, setData] = useState(data)
    const [value, setValue] = useState('')
    function check(id){
        setData(list.map((item) =>{
                if(item.id === id){
                    item.done = !item.done
                }
                return item
            })
        )
    }
    function deleteItems(id){
        setData(
            list.filter(item => item.id !== id)
        )
    }
    function addItem(){
        if(value.length > 4){
            
            setData(list.concat({id: list.length + 1, done: false, message: value}))
            console.log(list)
        }
        setValue('')
    }
    

    return (
        <MyContext.Provider value={{deleteItems}}>
            <div className="todo-container">
                {(list.length)? list.map((item, index) => <TodoItem  data={item} id={index} key={index} check={check}/>):
                <ModalTodo text={'List is Empty'}/>}
                <input onChange={(e)=> setValue(e.target.value)} type="text" value={value}/>
                <button onClick={() => addItem()}>add</button>
                
            </div>
        </MyContext.Provider>
    )
}
