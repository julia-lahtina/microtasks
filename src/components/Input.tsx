import React, {ChangeEvent} from 'react';

type InputPropsType = {
    newBookTitle: string
    setNewBookTitle: (newBookTitle: string) => void
}

export const Input = (props: InputPropsType) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newTitle  = e.currentTarget.value;
        props.setNewBookTitle(newTitle)
    }

    return (
        <input value={props.newBookTitle} onChange={handleChange} type="text"/>
    );
};
