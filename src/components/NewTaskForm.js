import React from "react";

function NewTaskForm({
  categories,
  onTaskFormSubmit,
  handleTextDetail,
  detailTextInput,
  handleCategoryChange,
}) {
  // console.log(categories);

  const renderCategories = categories
    .filter((category) => category !== "All")
    .map((category, index) => {
      return (
        <option value={category} key={index}>
          {category}
        </option>
      );
    });

  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input
          onChange={handleTextDetail}
          type="text"
          name="text"
          value={detailTextInput}
        />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {renderCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
