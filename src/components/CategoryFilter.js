import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {
  // console.log(categories);

  function handleCategoryBtn(e) {
    // console.log(e.target.value);
    // console.log(e.target.className);
    setSelectedCategory(e.target.value);
  }

  const renderButtons = categories.map((category, index) => {
    return (
      <button
        onClick={handleCategoryBtn}
        value={category}
        key={index + 1}
        className={selectedCategory === category ? "selected" : null}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div>{renderButtons}</div>
    </div>
  );
}

export default CategoryFilter;
