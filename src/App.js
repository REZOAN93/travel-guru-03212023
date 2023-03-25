import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <div><Toaster/></div>
    </div>
  );
}

export default App;
