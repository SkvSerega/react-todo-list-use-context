export interface AppendTodoAction {
    type: '@@TODO/APPEND',
    payload: { id: string, name: string }
}

const appendTodo = (id: string, name: string): AppendTodoAction => ({
    type: '@@TODO/APPEND',
    payload: {id, name}
})

export default appendTodo
