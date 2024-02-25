import React, {useState} from 'react';
import './App.css';
import {Modal} from './components/modal/Modal';
import {SuperButton} from './components/superButton/SuperButton';
import s from './components/superButton/SuperButton.module.css'
import {Adidas} from './components/Adidas';

function App() {

    const tasks = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false}
    ]

    return (
        <div>
            {/*            <SuperButton
                onClick={() => {}}
                color={'blue'}
                className={s.styleForSuperButtonBlue}
            >

                SuperButtonBlue
            </SuperButton>
            <SuperButton
                onClick={() => {}}
                color={'red'}
                className={s.styleForSuperButtonRed}
            >
                SuperButtonRed
            </SuperButton>*/}


            {/*            <SuperButton onClick={() => {}} color={'red'}>SuperButtonRed</SuperButton>
            <SuperButton onClick={() => {}}>SuperButtonGreen</SuperButton>
            <SuperButton onClick={() => {}} color={'blue'}>SuperButtonBlue</SuperButton>
            <SuperButton onClick={() => {}} disabled>SuperButtonBlueDisabled</SuperButton>*/}

            {/*            <Adidas tasks={tasks}>
                <SuperButton onClick={() => {
                }} color={'red'}>SuperButtonRed</SuperButton>
                <SuperButton onClick={() => {
                }}>SuperButtonGreen</SuperButton>
                <SuperButton onClick={() => {
                }} color={'blue'}>SuperButtonBlue</SuperButton>
                <div>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                </div>
            </Adidas>
            <Adidas tasks={tasks}>
                <SuperButton onClick={() => {
                }} disabled>SuperButtonBlueDisabled</SuperButton>
                <div>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                    <span>Lorem ipsum dolor sit amet, consectetur.</span>
                </div>
            </Adidas>
            <Adidas tasks={tasks}>
                gg
            </Adidas>*/}

{/*            <Modal>
                <input placeholder="email" type="email"/>
                <input placeholder="pass" type="password"/>
                <button>send</button>
            </Modal>*/}

            <Modal>
                <h3>Confidient Information</h3>
                <input placeholder="email" type="email"/>
                <input placeholder="pass" type="password"/>
                <input placeholder="pass" type="password"/>
                <div>
                    <input type="checkbox"/>
                    <span>I agree</span>
                </div>
                <button>send</button>
            </Modal>

        </div>
    );
}


export default App;
