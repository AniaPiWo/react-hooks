import { useState, useEffect } from "react";

//useEffect covers componentDidMount, componentDidUpdate, componentWillUnmount

//second argument is an array of values that useEffect depends on like in componentDidUpdate
//if we pass an empty array as a second argument, it will only run once like in componentDidMount
//if no second argument is passed, it will run every time the component is re-rendered like in componentDidUpdate

const UseEffectHook = () => {
  // example 1
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, [resourceType]);

  // example 2
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // we need to remove event listener when component is unmounted so we don't have memory leaks

  //example 3
  useEffect(() => {
    console.log("resourceType changed");
    return () => {
      console.log("clean up");
    };
  }, [resourceType]);

  return (
    <>
      <div>Example 2 windowWidth = {windowWidth}</div>
      <div>
        Example 1<button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {data.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
};

export default UseEffectHook;
