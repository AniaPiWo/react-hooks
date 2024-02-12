import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import Components from "./pages/Components";
import ToDoApp from "./Components/ToDoApp/ToDoApp";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoApp />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </div>
    </>
  );
}
