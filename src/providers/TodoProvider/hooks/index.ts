import React from "react";
import {TodoDispatchContext, TodoStateContext} from "../index";
import {setTodoList} from "../../../services/localStorage/todoList";

function useTodoState() {
    const context = React.useContext(TodoStateContext)
    if (context === undefined) {
        throw new Error('useTodoState must be used within a CountProvider')
    }

    setTodoList(context.list)

    return context
}

function useTodoDispatch() {
    const context = React.useContext(TodoDispatchContext)
    if (context === undefined) {
        throw new Error('useTodoDispatch must be used within a CountProvider')
    }
    return context
}

export {useTodoState, useTodoDispatch}
