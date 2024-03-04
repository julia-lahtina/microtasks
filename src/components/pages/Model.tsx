import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './Adidas';

export const Model = () => {

    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id));

    return (
        <div>
            {currentModel
                ? <>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}/>
                </>
                : <h2>Такой модели не существует</h2>
            }

        </div>
    );
};