import React from "react";

const Filter = (props) => {
  let category = props.category;
  let setCategory = props.setCategory;
  let filterData = props.filterData;

  const filterHandler = (title) => {
    setCategory(title)
  };

  return (
    <>
      <div className="w-11/12 flex flex-wrap space-x-4 gap-y-4 mx-auto py-4 justify-center ">
        {filterData.map((data) => (
          <button
            className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black"
            key={data.id}
            onClick={()=> filterHandler(data.title)}
          >
            {data.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default Filter;
