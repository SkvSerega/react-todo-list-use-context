import React from "react";
import {useTodoDispatch} from "../../providers/TodoProvider/hooks";
import appendTodo from "../../providers/TodoProvider/state/actions/appendTodo";
import "./todoForm.css";

const TodoForm: React.FC = () => {
    const [name, setName] = React.useState('');
    const inputNameRef = React.useRef<HTMLInputElement>(null)

    const todoDispatch = useTodoDispatch();

    React.useEffect(() => {
        inputNameRef.current?.focus();
    }, [])

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!name.trim().length) {
            return alert("Name not shouldn't is empty");
        }

        todoDispatch(appendTodo(Date.now().toString(), name))
        setName('');
    }

    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <input required className="todo-form__input" placeholder="Name" ref={inputNameRef} value={name}
                   onInput={(event => setName(event.currentTarget.value))}/>
            <button className="todo-form__button" type="submit">Добавить</button>
        </form>
    )
}

export default TodoForm;
