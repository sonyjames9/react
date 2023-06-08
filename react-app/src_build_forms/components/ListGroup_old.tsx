import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San, Francisco", "Tokyo", "London", "Paris"];
  // items = [];
  // let selectedIndex = 0;
  // Hook - this is a funciton which allows to tap into built-in features of react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('')
  // arr[0]; //variable (selectedIndex)
  // arr[1]; //updater function

  // const message = items.length === 0 ? <p>No item found</p> : null;
  const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    return items.length === 0 && <p>No item found</p>;
  };

  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
