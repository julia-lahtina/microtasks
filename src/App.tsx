import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
/*import {Button} from "./components/Button";
import {UseState} from "./components/UseState";
import {Map} from "./components/Map";
import {CurrentMoneyType, Filter, MoneyType} from "./components/Filter";*/

export type FilterType = "all" | "dollar" | "ruble"

function App() {

    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const addMessage = () => {
        console.log("aaaaaaaa")
    }

    /*    const onClickHandler = (name: string) => {
            console.log(name)
        }*/

    /*    const Button1Foo = (subscriber: string, age: number, address: string) => {
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
        ]*/

/*    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"},
    ])

    const [filter, setFilter] = useState<FilterType>("all")


    let currentMoney = money;

    if (filter === "ruble") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
    }

    if (filter === "dollar") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
    }
    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }*/

    return (

        <div className={"App"}>
            <FullInput addMessage={addMessage()}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>



/*

          {/!*  <Filter currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>*!/}


        /!*                            <Button name={"MyYouTubeChannel-1"} callBack={() => Button1Foo("I'm Vasya", 21, "live in Minsk")}/>
                    <Button name={"MyYouTubeChannel-2"} callBack={() => Button2Foo("I'm Ivan")}/>
                    <Button name={"Stupid"} callBack={Button3Foo}/>

                    <UseState/>
                    <Map books={books}/>


                                    <button onClick={(event) => onClickHandler("Vasya")}>MyYouTubeChannel-2</button>
                    <button onClick={(event) => onClickHandler("Ivan")}>MyYouTubeChannel-3</button>*!/
*/


    )
}

export default App;
