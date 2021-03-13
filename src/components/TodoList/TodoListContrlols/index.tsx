import React from "react";
import {useTodoDispatch} from "../../../providers/TodoProvider/hooks";
import setHideIsDone from "../../../providers/TodoProvider/state/actions/setHideIsDone";
import {TodoState} from "../../../providers/TodoProvider/state/reducer";
import setHIdeIsImportant from "../../../providers/TodoProvider/state/actions/setHIdeIsImportant";


const TodoListControls: React.FC<TodoState> = (props) => {
    const todoDispatch = useTodoDispatch();

    return (
        <div className="todo-list__controls">
            {
                props.list.find(todo => todo.isImportant) && (
                    <button className="todo-list__control todo-list__control_hide-is-important"
                            onClick={() => todoDispatch(setHIdeIsImportant(!props.showIsImportant))}>
                        {!props.showIsImportant ? 'Показать важные' : 'Показать все'}
                    </button>
                )
            }
            {
                props.list.find(todo => todo.isDone) && (
                    <button className="todo-list__control todo-list__control_hide-is-done"
                            onClick={() => todoDispatch(setHideIsDone(!props.showIsDone))}>
                        {!props.showIsDone ? 'Показывать выполненые' : 'Показать все'}
                    </button>
                )
            }
        </div>
    );
}

export default TodoListControls
