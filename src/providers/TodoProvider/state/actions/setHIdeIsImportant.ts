export interface SetHideIsImportantTodoAction {
    type: '@@TODO/SET_HIDE_IS_IMPORTANT',
    payload: boolean
}

const appendTodo = (value: boolean): SetHideIsImportantTodoAction => ({
    type: '@@TODO/SET_HIDE_IS_IMPORTANT',
    payload: value
})

export default appendTodo
