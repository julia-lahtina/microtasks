import React from 'react';
import {BooksType} from '../App';


export const Item = (props: BooksType) => {
    return (
        <ul>
            <div>
                <span>{}</span>
                <input type="text"/>
            </div>
                {props.books.map((b) => {
                    return(
                        <li>
                            <h4>{b.title}</h4>
                            <span>{b.author}</span>
                            <span>{b.nameOfBook}</span>
                            <span>{b.yearOfPublishing}</span>
                        </li>
                    )
                })}
        </ul>
    );
};
