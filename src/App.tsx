import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {UseState} from "./components/UseState";


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

    return (
        <div className={"App"}>
            <Button name={"MyYouTubeChannel-1"} callBack={()=>Button1Foo("I'm Vasya", 21, "live in Minsk")}/>
            <Button name={"MyYouTubeChannel-2"} callBack={()=>Button2Foo("I'm Ivan")}/>
            <Button name={"Stupid"} callBack={Button3Foo}/>

            <UseState/>


{/*            <button onClick={(event) => onClickHandler("Vasya")}>MyYouTubeChannel-2</button>
            <button onClick={(event) => onClickHandler("Ivan")}>MyYouTubeChannel-3</button>*/}
        </div>
    );
}


export default App;
