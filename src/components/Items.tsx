import React from 'react';
import {Item} from './Item';
import {BooksType} from '../App';

export const Items = (props: BooksType) => {
    return (
        <Item books={props.books}/>
    );
};
