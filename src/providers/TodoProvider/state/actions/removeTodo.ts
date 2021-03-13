export interface RemoveTodoAction {
    type: '@@TODO/REMOVE',
    payload: {
        id: string
    }
}

const removeTodo = (id: string): RemoveTodoAction => ({
    type: '@@TODO/REMOVE',
    payload: {id}
})

export default removeTodo
