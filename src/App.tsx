import React from 'react';
import TodoProvider from "./providers/TodoProvider";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Card from "./components/Card";

function App() {
    return (
        <Card title="TODO LIST">
            <TodoProvider>
                <TodoForm/>
                <TodoList/>
            </TodoProvider>
        </Card>
    );
}

export default App;
