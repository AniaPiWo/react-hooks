import { useState, useMemo, useEffect } from "react";
import "./Hooks.css";

//useMemo is used to memoize the value of a function
//useMemo is used to optimize the performance of the application
//useMemo is used to cache the value of a function

export default function UseMemoHook() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <div className="usememo">
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Toggle Theme
      </button>
      <div className="double" style={themeStyles}>
        {doubleNumber}
      </div>
    </div>
  );
}

//imitacja wolnej funkcji
function slowFunction(num) {
  console.log("Calling Slow Function");
  // eslint-disable-next-line no-empty
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
