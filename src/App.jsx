import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import ToDoApp from "./Components/ToDoApp/ToDoApp";

export default function App() {
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/todo":
      component = <ToDoApp />;
      break;
    default:
      component = <Home />;
      break;
  }

  return (
    <>
      <Header />
      <div className="container">{component}</div>
    </>
  );
}
