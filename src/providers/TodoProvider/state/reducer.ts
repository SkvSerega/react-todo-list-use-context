import React from "react";
import {AppendTodoAction} from "./actions/appendTodo";
import {RemoveTodoAction} from "./actions/removeTodo";
import {SetIsImportantTodoAction} from "./actions/setisImportantTodo";
import {SetIsDoneTodoAction} from "./actions/setIsDoneTodo";
import {setHideIsDoneTodoAction} from "./actions/setHideIsDone";
import {SetHideIsImportantTodoAction} from "./actions/setHIdeIsImportant";
import {getTodoList} from "../../../services/localStorage/todoList";

export interface Todo {
    id: string;
    name: string;
    isImportant: boolean;
    isDone: boolean;
}

export interface TodoState {
    list: Todo[],
    showIsDone: boolean,
    showIsImportant: boolean,
}

export type TodoActions =
    AppendTodoAction
    | RemoveTodoAction
    | SetIsImportantTodoAction
    | SetIsDoneTodoAction
    | setHideIsDoneTodoAction | SetHideIsImportantTodoAction;

export type TodoReducer = React.Reducer<TodoState, TodoActions>;

const todoInitState: React.ReducerState<TodoReducer> = {
    list: getTodoList(),
    showIsDone: false,
    showIsImportant: false
}

const todoReducer: TodoReducer = (prevState, action) => {
    switch (action.type) {
        case "@@TODO/SET_HIDE_IS_IMPORTANT": {
            return {...prevState, showIsImportant: action.payload}
        }

        case "@@TODO/SET_HIDE_IS_DONE": {
            return {...prevState, showIsDone: action.payload}
        }

        case "@@TODO/APPEND": {
            const {id, name} = action.payload;
            return {...prevState, list: [...prevState.list, {id, name, isDone: false, isImportant: false}]}
        }

        case "@@TODO/REMOVE": {
            const {id} = action.payload;
            return {...prevState, list: [...prevState.list.filter(todo => todo.id !== id)]}
        }

        case "@@TODO/SET_IMPORTANT": {
            const {id, isImportant} = action.payload;
            return {
                ...prevState,
                list: prevState.list.map(todo => todo.id !== id ? todo : {
                    ...todo,
                    isImportant: isImportant
                })
            }
        }

        case "@@TODO/SET_DONE": {
            const {id, isDone} = action.payload;
            return {
                ...prevState,
                list: prevState.list.map(todo => todo.id !== id ? todo : {
                    ...todo,
                    isDone: isDone
                })
            }
        }

        default:
            return prevState;
    }
}


export {todoInitState, todoReducer};
