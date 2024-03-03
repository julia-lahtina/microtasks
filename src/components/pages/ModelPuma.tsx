import React from 'react';
import {useParams} from 'react-router-dom';
import {pumaArr} from './Puma';

export const ModelPuma = () => {

    const params = useParams()
    console.log(params)

    return (
        <div>
            <h2>{pumaArr[Number(params.id)].model}</h2>
            <h4>{pumaArr[Number(params.id)].collection}</h4>
            <h3>{pumaArr[Number(params.id)].price}</h3>
            <img
                src={pumaArr[Number(params.id)].picture}
                alt={pumaArr[Number(params.id)].model}/>
        </div>
    );
};
