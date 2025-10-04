import {useState} from 'react';
import {useApi} from '../../hooks/useApi.js';

export const TodoList = ({todolist, updateTodoList}) => {
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const request = useApi()

    const startEditing = (item) => {
        setEditingId(item._id);
        setEditTitle(item.title);
    };

    const editTodoItem = async (e) => {
        e.preventDefault();
        try {
            await request('http://localhost:3002/api/todos/edit', {
                method: 'PUT',
                body: {
                    id: editingId,
                    title: editTitle
                }
            });
            // const res = await fetch('http://localhost:3002/api/todos/edit', {
            //     method: 'PUT',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         id: editingId,
            //         title: editTitle
            //     })
            // });
            // if (res.status !== 200) {
            //     const json = await res.json();
            //     alert(json.message);
            //     return;
            // }
            setEditingId(null);
            updateTodoList();
        } catch (e) {
            console.log(e);
        }
    };


    const deleteTodoItem = async (title) => {
        try {
            await request('http://localhost:3002/api/todos/delete', {
                method: 'DELETE',
                body: {title}
            })
            // const res = await fetch('http://localhost:3002/api/todos/delete', {
            //     method: 'DELETE',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         title
            //     })
            // });
            // if (res.status !== 200) {
            //     const json = await res.json();
            //     alert(json.message);
            //     return;
            // }
            updateTodoList();
        } catch (e) {
            console.log(e);
        }
    };

    return <>
        {
            !todolist.length && <>Loading...</>
        }
        {
            todolist.map((item) => (
                <div key={item._id}>
                    {editingId === item._id ? (
                        <form onSubmit={editTodoItem}>
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <button type="submit">Сохранить</button>
                        </form>
                    ) : (<div>
                        {item.title} &nbsp;
                        <span style={{color: 'red'}} onClick={() => deleteTodoItem(item.title)}>Удалить</span> &nbsp;
                        <span style={{color: 'blue'}} onClick={() => startEditing(item)}>Редактировать</span>
                    </div>)
                    }
                    <br/>
                </div>
            ))
        }
    </>;
};