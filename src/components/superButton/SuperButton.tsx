import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import s from './SuperButton.module.css'

export type SuperButtonPropsType = {
    onClick: () => void
    name?: string
    color?: string
    disabled?: boolean
    children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>
export const SuperButton = ({
                                onClick,
                                name,
                                children,
                                color,
                                disabled,
                                className,
                                ...restProps
                            }: SuperButtonPropsType) => {   // так пишут в инкубаторе

    const handleClick = () => {
        onClick()
    }

    //---------------------------------------------------------
    /*    const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : color === 'red'
                ? ' ' + s.red
                : color === 'secondary'
                    ? ' ' + s.secondary
                    : ' ' + s.default)
        + (className ? ' ' + className : '')*/

    //---------------------------------------------------------

    /*    const finalClassName = s.button + ' ' + s.red*/

    //---------------------------------------------------------

    // переписываем на шаблоные строки
    /*    const finalClassName = `${s.button} ${s.default}`*/

    //---------------------------------------------------------

/*    const finalClassName = `
    ${s.button} //это база, если нет никаких условий
    ${color === 'red' ? s.red : s.default} //это уже логика условия и если оно выполняется либо не выполняется, будет применен соответствующий стиль
    ${disabled ? s.disabled : ''}`*/

    //---------------------------------------------------------

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color==='blue' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}`


    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            {...restProps}
            className={finalClassName}
        >{children}
        </button>  //вместо name используем children
    );
}


// 3 ---------------------------------------------------------------

/*
import React from 'react';

export type SuperButtonPropsType = {
    onClick: () => void
    name: string
    color: string
}
export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {onClick, name, ...restProps} = props

    console.log(restProps.color)
    const handleClick = () => {
        onClick()
    }

    return (
        <button onClick={handleClick}>{name}</button>
    );
}
*/


// 2 ---------------------------------------------------------------

/*
import React from 'react';

export type SuperButtonPropsType = {
    onClick: () => void
    name: string
    color: string
}
export const SuperButton: React.FC<SuperButtonPropsType> = ({onClick, name, ...restProps}) => {

    console.log(restProps.color)
    const handleClick = () => {
        onClick()
    }

    return (
        <button onClick={handleClick}>{name}</button>
    );
}
*/


// 1 ---------------------------------------------------------------

/*
export type SuperButtonPropsType = {
    onClick: () => void
    name: string
}
export const SuperButton = (props: SuperButtonPropsType) => {

    const handleClick = () => {
        props.onClick()
    }

    return (
        <button onClick={handleClick}>{props.name}</button>
    );
};
*/
