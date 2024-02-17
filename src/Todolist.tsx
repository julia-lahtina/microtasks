import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from './components/Button';


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title, props.id)
    }

    const removeTaskHandler = (tTaskId: string) => {
        props.removeTask(tTaskId, props.id)
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id)
    }

    const onChangeInputHandler = (tTaskId: string, e: boolean) => {
        //let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(tTaskId, e, props.id);
    }


    return <div>
        <h3> {props.title}
            <Button title={'X'} callBack={removeTodolistHandler}/>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button title={'+'} callBack={addTaskHandler}/>
            {/*<button onClick={() => {'addTask'}}>+</button>*/}
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
/*                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }*/


                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={(e)=>onChangeInputHandler(t.taskId, e.currentTarget.checked)} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={'X'} callBack={() => removeTaskHandler(t.taskId)}/>
                        {/*<button onClick={() => {'removeTask'}}>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <Button title={'All'} callBack={()=>changeFilterHandler('all')}/>
            <Button title={'Active'} callBack={()=>changeFilterHandler('active')}/>
            <Button title={'Completed'} callBack={()=>changeFilterHandler('completed')}/>

{/*            <button onClick={changeFilterHandler}>All</button>
            <button onClick={changeFilterHandler}>Active</button>
            <button onClick={changeFilterHandler}>Completed</button>*/}
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


