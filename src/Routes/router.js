import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Coxbazar from "../Hotels/Coxbazar/Coxbazar";
import RightSide from "../Hotels/RightSide/RightSide";
import StartBooking from "../Hotels/StartBooking/StartBooking";
import Main from "../Layout/Main/Main";
import BookingPage from "../Shared/BookingPage/BookingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Coxbazar />,
        loader: () => fetch("http://localhost:5000/hotel"),
      },
      {
        path: "/",
        element: <RightSide />,
      },
      {
        path: "/hotel",
        element: <StartBooking />,
        loader: () => fetch(`http://localhost:5000/hotel`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bookingpage",
        element: <BookingPage />,
      },
    ],
  },
]);
