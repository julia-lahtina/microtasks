import React from 'react';

type ButtonPropsType = {
    nameBtn: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const handleClick = () => {
        props.callBack()
    }

    return (
        <button onClick={handleClick}>{props.nameBtn}</button>
    );
};
