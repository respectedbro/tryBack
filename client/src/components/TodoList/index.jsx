
export const TodoList = ({todolist}) => {


    return <>
        {
            !todolist.length && <>Loading...</>
        }
        {
            todolist.map((item) => (
                <div key={item._id}>{item.title}</div>
            ))
        }
    </>
}