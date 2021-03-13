export interface SetIsDoneTodoAction {
    type: '@@TODO/SET_DONE',
    payload: { id: string, isDone: boolean }
}

const setIsImportantTodo = (id: string, isDone: boolean): SetIsDoneTodoAction => ({
    type: '@@TODO/SET_DONE',
    payload: {id, isDone}
})

export default setIsImportantTodo
