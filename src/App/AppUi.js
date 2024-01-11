import React from 'react';
import { TodoItem } from '../components/TodoItem';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';


function AppUi() {

    const {
        loading,
        error,
        completeTodo,
        searchTodos,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading &&
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>}
                {error && <TodosError />}
                {(!loading && searchTodos.length === 0) && <EmptyTodos />}
                {searchTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        completed={todo.completed}
                        text={todo.text}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}
export { AppUi };