
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

function TodoCounter() {

    const { totalTodo, completedTodo } = React.useContext(TodoContext);

    return (

        <>
            {totalTodo === completedTodo ? (
                <h1 className='TodoCounter'>Felicidades completaste todo los Todos</h1>
            ) : (
                <h1 className='TodoCounter'>Has completado <span>{completedTodo}</span> de <span>{totalTodo}</span> TODOS </h1>
            )}

        </>



    );
}

export { TodoCounter };