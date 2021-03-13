export interface SetIsImportantTodoAction {
    type: '@@TODO/SET_IMPORTANT',
    payload: { id: string, isImportant: boolean }
}

const setIsImportantTodo = (id: string, isImportant: boolean): SetIsImportantTodoAction => ({
    type: '@@TODO/SET_IMPORTANT',
    payload: {id, isImportant}
})

export default setIsImportantTodo
