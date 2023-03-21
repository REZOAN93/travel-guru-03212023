import { createBrowserRouter } from "react-router-dom";
import Coxbazar from "../Hotels/Coxbazar/Coxbazar";
import Main from "../Layout/Main/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Coxbazar />,
        
        },
      ],
    },
  ]);