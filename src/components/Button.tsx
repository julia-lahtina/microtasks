import React from 'react';

export type ButtonType = {
    title: string
    onClick: () => void
}
export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
};
