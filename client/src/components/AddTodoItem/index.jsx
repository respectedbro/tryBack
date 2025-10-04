import {useState} from 'react';
import {useApi} from '../../hooks/useApi.js';

export const AddTodoItem = ({updateTodoList}) => {

    const [title, setTitle] = useState('');
    const request = useApi()

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await request('http://localhost:3002/api/todos/add', {
                method: 'POST',
                body: {title}
            })
         // const res = await fetch('http://localhost:3002/api/todos/add', {
         //     method: 'POST',
         //     headers: {
         //         'Accept': 'application/json',
         //         'Content-Type': 'application/json'
         //     },
         //     body: JSON.stringify({
         //         title
         //     })
         // })
         //    if (res.status !==200) {
         //        const json = await res.json()
         //            alert(json.message)
         //        return
         //    }
         //    updateTodoList()
         //    setTitle('')

            updateTodoList();
            setTitle('');
        } catch (err) {
            console.log(err);
        }

    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br/>
            <br/>
            <button type="submit">Добавить</button>
        </form>
    );
};