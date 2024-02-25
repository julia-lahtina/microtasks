import React, {ReactNode} from 'react';

type AdidasType = {
    tasks: AdidasPropsType[]
    children: ReactNode
}

type AdidasPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const Adidas = ({tasks, children}: AdidasType) => {
    return (
        <div>
            <ul>
                {tasks.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.isDone}/>
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>

        </div>
    );
};
