import React, {ChangeEvent, RefObject} from 'react';

export type InputType = {
/*    value: string
    callBack: (value: string) => void*/
    newTitle: RefObject<HTMLInputElement>
    //setNewTitle: (newTitle: string) => void
}
export const Input = (props: InputType) => {

/*    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       props.setNewTitle(e.currentTarget.value)
    }*/

    return (
        <input
            ref={props.newTitle}
            //onChange={onChangeHandler}
            //value={props.newTitle} type="text"
        />
    );
};
