import { useEffect, useState, useRef } from "react";

// if we do not fall into infinite loop, we can use useState hook like below!
// wartosc useState w useEffect wywoluje sie za kazdym razem kiedy komponent sie renderuje, a po renderze useEffect sie wywoluje i zmienia wartosc useState, co powoduje ponowne renderowanie komponentu i tak w kolko
/* const UseRefHook = () => {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prevRenderCount) => prevRenderCount + 1);
  });

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>my name is {name}</p>
      <p>render count: {renderCount}</p>
    </>
  );
};

export default UseRefHook; */

const UseRefHook = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  // useRef will not cause re-render when the value changes
  //useRef is object {current: 0}
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "John";
    //bad practice to change value directly - its not updating the state!
  };

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <p>
        my name is {name}, and it used to be {prevName.current}
      </p>
      <p>render count: {renderCount.current}</p>
      <button onClick={focus}>focus</button>
    </>
  );
};

export default UseRefHook;
