import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [detailTextInput, handleDetailTextInput] = useState("");
  const [categoryChange, setCategoryChange] = useState("code");
  // const [filteredCategories, setFilteredCategories] = useState("All");

  function handleDelete(index) {
    console.log(index);
    const filteredArray = tasks.filter((task) => tasks.indexOf(task) !== index);
    setTasks(filteredArray);
  }
  // console.log(tasks);
  const filteredCategories = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return task;
    } else if (task.category === selectedCategory) {
      return true;
    }
  });

  // console.log("filteredCategories", filteredCategories);

  function handleTextDetail(e) {
    console.log(e.target.value);
    handleDetailTextInput(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategoryChange(e.target.value);
  }

  function onTaskFormSubmit(e) {
    e.preventDefault();
    const newTask = { text: detailTextInput, category: categoryChange };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
        handleTextDetail={handleTextDetail}
        detailTextInput={detailTextInput}
        handleCategoryChange={handleCategoryChange}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        handleDelete={handleDelete}
        filteredCategories={filteredCategories}
      />
    </div>
  );
}

export default App;
