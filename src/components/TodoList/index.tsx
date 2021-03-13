import React from "react";
import {useTodoDispatch, useTodoState} from "../../providers/TodoProvider/hooks";
import removeTodo from "../../providers/TodoProvider/state/actions/removeTodo";
import setIsImportantTodo from "../../providers/TodoProvider/state/actions/setisImportantTodo";
import setIsDoneTodo from "../../providers/TodoProvider/state/actions/setIsDoneTodo";
import TodoListControls from "./TodoListContrlols";
import "./todoList.css";

const TodoList: React.FC = () => {
    const todoState = useTodoState();
    const todoDispatch = useTodoDispatch();

    return (
        <div className="todo-list">
            <TodoListControls {...todoState}/>
            {todoState.list
                .filter(todo => {
                    const showIsImportant = !(todoState.showIsImportant && !todo.isImportant);
                    const showIsIsDone = !(todoState.showIsDone && !todo.isDone);

                    return (showIsImportant && showIsIsDone) && (showIsImportant || showIsIsDone);
                })
                .sort(((a, b) => +a.id - +b.id && a.isImportant ? -1 : 1))
                .map(todo => (
                    <div key={todo.id} className="todo-list__item">
                        <span className="todo-list__item-name">{todo.name}</span>
                        <div className="todo-list__actions">
                            <button className={`
                            todo-list__actions-button todo-list__actions-button_done
                            ${todo.isImportant && 'todo-list__actions-button_done_active'}
                        `}
                                    onClick={() => todoDispatch(setIsDoneTodo(todo.id, !todo.isDone))}
                            >
                                {todo.isDone ? '✅' : '✔'}
                            </button>
                            <button className={`
                            todo-list__actions-button todo-list__actions-button_important
                            ${todo.isImportant && 'todo-list__actions-button_important_active'}
                        `}
                                    onClick={() => todoDispatch(setIsImportantTodo(todo.id, !todo.isImportant))}
                            >
                                ⚠
                            </button>
                            <button className="todo-list__actions-button todo-list__actions-button_remove"
                                    onClick={() => todoDispatch(removeTodo(todo.id))}>X
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default TodoList
