import React from 'react';

export type MapPropsType = {
    books: Array<BooksType>
}

export type BooksType = {
    id: number
    type: string
    author: string
    published: number
}
export const Map = (props: MapPropsType) => {

    return (
        <>
            {props.books.map((book) => {
                return (
                    <ul>
                        <li>{book.id}</li>
                        <li>{book.type}</li>
                        <li>{book.author}</li>
                        <li>{book.published}</li>
                    </ul>
                )
            })}
        </>
    );
};
