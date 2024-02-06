import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

export type FullInputPropsType = {
    addMessage: ()=> void
}
export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState("")
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} type="text"/>
            <button onClick={()=>{}}>+</button>
        </div>
    );
};
