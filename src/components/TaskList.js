import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, handleDelete, filteredCategories }) {
  // console.log(tasks);

  const filtereldTasks = filteredCategories.map((task, index) => {
    return (
      <Task
        key={index + 1}
        index={index}
        category={task.category}
        text={task.text}
        handleDelete={handleDelete}
      />
    );
  });

  return <div className="tasks">{filtereldTasks}</div>;
}

export default TaskList;
