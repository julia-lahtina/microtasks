import React from 'react';
import './App.css';
import {Items} from './components/Items';
import {Button} from './components/Button';

export type BookPropsType = {
    id: number
    title: string
    author: string
    nameOfBook: string
    yearOfPublishing: number
    isChecked: boolean
}

export type BooksType = {
    books: BookPropsType[]
}

function App() {

    const books= [
        {
            id: 1,
            title: 'Klassik',
            author: 'Griboedov',
            nameOfBook: 'Gore ot uma',
            yearOfPublishing: 1825,
            isChecked: true
        },
        {
            id: 2,
            title: 'Roman',
            author: 'Basset',
            nameOfBook: 'Blablabla',
            yearOfPublishing: 2003,
            isChecked: false
        },
        {
            id: 3,
            title: 'Horror',
            author: 'King',
            nameOfBook: 'Door',
            yearOfPublishing: 1999,
            isChecked: true
        },
        {
            id: 4,
            title: 'Klassik',
            author: 'Tolstoj',
            nameOfBook: 'Voina i mir',
            yearOfPublishing: 1869,
            isChecked: false
        },
        {
            id: 5,
            title: 'Roman',
            author: 'Basset',
            nameOfBook: 'Blablabla2',
            yearOfPublishing: 2020,
            isChecked: true
        },

    ]


    function openBooksButton() {

    }


    return (
        <div className="App">
            <h2>Выберите интересующий Вас продукт:</h2>
            <Button nameBtn={'OPEN'} callBack={openBooksButton}/>
            <Items books={books}/>
        </div>
    );
}

export default App;

