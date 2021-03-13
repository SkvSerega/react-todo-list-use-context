export interface setHideIsDoneTodoAction {
    type: '@@TODO/SET_HIDE_IS_DONE',
    payload: boolean
}

const appendTodo = (value: boolean): setHideIsDoneTodoAction => ({
    type: '@@TODO/SET_HIDE_IS_DONE',
    payload: value
})

export default appendTodo
