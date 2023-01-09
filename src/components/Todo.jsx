import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

function Todo() {
    const [tasks, setTasks] = useState(["clean room", "remove cowebs", "visit family"])
    const [mode, setMode] = useState("add")
    const [inputTask, setInputTask] = useState("")

    const [toEdit, setToEdit] = useState(0)

    const taskItems = tasks.map((t, i) => {
        return (
            <div key={i} className="taskCard">
                <p>{t}</p>
                <div>
                    <span onClick={() => handleEditClick(i)} className="editBtn">EDIT</span>
                    <span onClick={() => handleDelete(i)} className="deleteBtn">DELETE</span>
                </div>
            </div>
        );
    });

    const handleAdd = function () {
        if (mode == "add") {
            setTasks([...tasks, inputTask])
            setInputTask("")
        } else {
            tasks[toEdit] = inputTask
            setInputTask(tasks);
            setMode("add");
            setInputTask("");
        }
    }

    const handleDelete = (i) => {
        const tasksCopy = [...tasks]
        tasksCopy.splice(i, 1)
        setTasks(tasksCopy);
    }

    const handleEditClick = (i) => {
        setMode("edit")
        setInputTask(tasks[i])
        setToEdit(i)
    }

    return (
        <>
            <div>
                <h2>Task List </h2>
                <div className="inputDiv">
                    <input className="taskInput" type="text" placeholder="Write a Task" value={inputTask} onChange={(e) => setInputTask(e.target.value)} onKeyPress={(e) => {e.key == "Enter" ? handleAdd : console.log("Not Enter") }} />
                    <a href="#" className="addBtn" onClick={handleAdd}>{mode == "add" ? "ADD TASK" : "SAVE TASK" }</a>
                </div>
            </div>

            <div className="tasks">
                <h2>Tasks</h2>
                {tasks.length != 0 ? taskItems : <p>No Items</p>}
            </div>
        </>
    );
}


export default Todo;