import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import TermCondition from "../Authentication/term&Condition/TermCondition";
import UserData from "../Authentication/User/UserData";
import Coxbazar from "../Hotels/Coxbazar/Coxbazar";
import RightSide from "../Hotels/RightSide/RightSide";
import StartBooking from "../Hotels/StartBooking/StartBooking";
import Main from "../Layout/Main/Main";
import RequireAuth from "../PrivateRoute/RequireAuth";
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
        element: (
          <RequireAuth>
            <BookingPage />
          </RequireAuth>
        ),
        loader: () => fetch(`http://localhost:5000/room`),
      },
      {
        path: "/term&Condition",
        element: <TermCondition></TermCondition>,
      },
      {
        path: "/userDetails",
        element: (
          <RequireAuth>
            <UserData></UserData>
          </RequireAuth>
        ),
      },
    ],
  },
]);
