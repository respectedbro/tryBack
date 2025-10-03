
export const TodoList = ({todolist, updateTodoList}) => {

    const deleteTodoItem = async (title) => {
        try {
            const res = await fetch('http://localhost:3002/api/todos/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title
                })
            })
            if (res.status !==200) {
                const json = await res.json()
                alert(json.message)
                return
            }
            updateTodoList()
        } catch (e) {
            console.log(e);
        }
    }

    return <>
        {
            !todolist.length  && <>Loading...</>
        }
        {
            todolist.map((item) => (
                <div key={item._id}>{item.title} &nbsp;
                <span onClick={() => deleteTodoItem(item.title)}>Удалить</span>
                </div>
            ))
        }
    </>
}