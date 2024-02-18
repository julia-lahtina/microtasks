import React, {ChangeEvent} from 'react';

export type InputType = {
/*    value: string
    callBack: (value: string) => void*/
    newTitle: string
    setNewTitle: (newTitle: string) => void
}
export const Input = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.setNewTitle(e.currentTarget.value)
    }

    return (
        <input onChange={onChangeHandler} value={props.newTitle} type="text"/>
    );
};
