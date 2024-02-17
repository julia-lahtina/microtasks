import React from 'react';

export type ButtonPropsType = {
    title: string
    callBack: () => void
}
export const Button = ({title, callBack}: ButtonPropsType) => {

    const handleClick = () => {
        callBack();
    }

    return (
        <button onClick={handleClick}>{title}</button>
    );
};
