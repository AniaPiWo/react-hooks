import "./Hooks.css";
import { useState } from "react";

//order of useStates is important - they execute in the order they are written
//they cannot be nested in anything
// state change will re-render the component

/*   const [name, setName] = useState(() => {
    console.log("useState with function argument");
    return "John";
  });
 */

const countInitial = () => {
  console.log("useState with function argument");
  return 4;
};

const UseStateHook = () => {
  const [name, setName] = useState("John");
  //simple usage of useState

  const [user, setUser] = useState({ name: "John", age: 25 });
  //useState with object, not recomended to use object as a state

  const [count, setCount] = useState(() => countInitial());
  //if we pass value as a function like above, it will only be called once
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span className="usestate">{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
      </div>
      <div>
        <input
          type="text"
          value={user.name} // Use user.name here instead of userDesc.name
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <p>
          {user.name}, {user.age}
        </p>
      </div>
    </>
  );
};

export default UseStateHook;
