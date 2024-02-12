import FunctionContextComponent from "./UseContextComponents/FunctionContextComponent";
import { ThemeProvider } from "./UseContextComponents/ThemeContext";

const UseContextHook = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};

export default UseContextHook;
