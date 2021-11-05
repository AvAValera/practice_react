import React,{useContext} from 'react'
import MyContext from '../context'

export default function TodoItem({data, id, check}) {
    const res = useContext(MyContext)
    const done = ['message'];

    if(data.done) done.push('message-done')
    
    return (
        <div className="todo-item">
            <p className="numb">{id + 1}</p>
            <input onChange={()=>check(data.id)} type="checkbox" />
            <p className={done.join(' ')}>{data.message}</p>
            <button onClick={()=> res.deleteItems(data.id)}>delete</button>
        </div>
    )
}
