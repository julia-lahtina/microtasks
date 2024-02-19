import React, {ChangeEvent} from 'react';

type InputPropsType = {
    newBookTitle: string
    setNewBookTitle: (newBookTitle: string) => void
}

export const Input = (props: InputPropsType) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.newBookTitle = e.currentTarget.value;
        props.setNewBookTitle(props.newBookTitle);
        console.log(props.newBookTitle)
    }

    return (
        <input value={props.newBookTitle} onChange={handleChange} type="text"/>
    );
};
