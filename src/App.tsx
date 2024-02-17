import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import {json} from 'node:stream/consumers';
import {Button} from './components/Button';

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])

    const fetschTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetschTodos()
    }, [])  //-------> если в [] положить todos, useEffect будет следить за переменной todos, если в ней произошло 5 изменений, useEffect 5 раз запустится, отрисуется

    //очень часто useEffect работет в связке с useState

    console.log(todos)


    const showHandler = () => {
        fetschTodos()
    }

    const hideHandler = () => {
        setTodos([])
    }

    return (
        <div className="App">
            <div>
                <Button title={'Show me todos'} onClick={showHandler}/>
                <Button title={'Hide me todos'} onClick={hideHandler}/>
{/*                <button onClick={showHandler}>Show me todos</button>
                <button onClick={hideHandler}>Hide me todos</button>*/}
            </div>
            <ul>
                {todos.map((el: TodosType, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" checked={el.completed}/>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;

