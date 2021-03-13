import React from "react";
import {TodoActions, todoInitState, todoReducer, TodoReducer} from "./state/reducer";

export const TodoStateContext = React.createContext(todoInitState);
export const TodoDispatchContext = React.createContext<React.Dispatch<TodoActions> | undefined>(undefined);

const TodoProvider: React.FC = (props) => {
    const [state, dispatch] = React.useReducer<TodoReducer>(todoReducer, todoInitState)

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {props.children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>);
}

export default TodoProvider;
