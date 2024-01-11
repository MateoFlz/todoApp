import React from 'react';
import { useLocalStore } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider({children}) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStore('TODO_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodo = todos.filter(todo => !!todo.completed).length;
    const totalTodo = todos.length;
    const searchTodos = todos.filter((todo) => {
        return todo
            .text
            .toLocaleLowerCase()
            .includes(
                searchValue
                    .toLocaleLowerCase()
            )
    });

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                completeTodo,
                totalTodo,
                completedTodo,
                searchValue,
                setSearchValue,
                searchTodos,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider }