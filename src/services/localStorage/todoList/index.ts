import {Todo} from "../../../providers/TodoProvider/state/reducer";

const TODO_LIST = 'todo-list'

function getTodoList() {
    const list = localStorage.getItem(TODO_LIST);
    return list ? JSON.parse(list) : [];
}

function setTodoList(list: Todo[]) {
    localStorage.setItem(TODO_LIST, JSON.stringify(list))
}

export {getTodoList, setTodoList}
