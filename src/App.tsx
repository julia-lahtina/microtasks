import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {UseState} from "./components/UseState";
import {Map} from "./components/Map";


function App() {

    /*    const onClickHandler = (name: string) => {
            console.log(name)
        }*/

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log("I am stupid Button")
    }

    const books = [
        {id: 1, type: "roman", author: "Van de Kamp", published: 2022},
        {id: 2, type: "horror", author: "King", published: 1995},
        {id: 3, type: "roman", author: "Dostoevski", published: 2010},
    ]

    return (
        <div className={"App"}>
            <Button name={"MyYouTubeChannel-1"} callBack={() => Button1Foo("I'm Vasya", 21, "live in Minsk")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={() => Button2Foo("I'm Ivan")}/>
            <Button name={"Stupid"} callBack={Button3Foo}/>

            <UseState/>
            <Map books={books}/>


            {/*            <button onClick={(event) => onClickHandler("Vasya")}>MyYouTubeChannel-2</button>
            <button onClick={(event) => onClickHandler("Ivan")}>MyYouTubeChannel-3</button>*/}
        </div>
    );
}


export default App;
