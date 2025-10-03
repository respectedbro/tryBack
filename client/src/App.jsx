import {useCallback, useEffect, useState} from 'react';
import {TodoList} from './components/TodoList/index.jsx';
import {useGetTodoList} from './hooks/useGetTodoList.js';

import './App.css';
import {AddTodoItem} from './components/AddTodoItem/index.jsx';

function App() {
    const [todolist, setTodoList] = useState([])

    const getTodoList = useGetTodoList()

    const updateTodoList = useCallback(() => {
        getTodoList().then((result) => setTodoList(result.todos))
    }, [getTodoList])


    useEffect(() => {
        updateTodoList()
    }, [updateTodoList]);

    return (
        <>
            <h1>Мои задачи</h1>
            <TodoList todolist={todolist} updateTodoList={updateTodoList}/>
            <br/>
            <AddTodoItem updateTodoList={updateTodoList}/>
        </>
    );
}

export default App;
