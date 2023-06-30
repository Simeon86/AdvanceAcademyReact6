import { useState } from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoList() {
    const [toDoList, setToDoList] = useState(['Learn React Components']);
    const [inputValue, setInputValue] = useState('')

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(inputValue);

        let tempList = toDoList;
        tempList.push(inputValue);
        setToDoList(tempList);
        setInputValue('');
    }

    function handleOnChange(event) {
        console.log(event.target.value);
        setInputValue(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="toDOTask" placeholder="Enter To Do Task" value={inputValue} onChange={handleOnChange}/>
                <input type="submit" value="submit" />
            </form>
            <ul>
                {toDoList.map((toDoItem, index) => <ToDoListItem key={index} toDoItem={toDoItem} />)}
            </ul>
        </>
    )
}

export default ToDoList;