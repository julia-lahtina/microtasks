import React, {useEffect, useState} from 'react';
import './App.css';


function App() {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [todos])  //-------> useEffect будет следить за переменной todos


    return (
        <div className="App">

        </div>
    );
}

export default App;

