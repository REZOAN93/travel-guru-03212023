import React from "react";
import { Link } from "react-router-dom";
import "./LeftSide.css";
import { BsArrowRight } from "react-icons/bs";

const LeftSide = () => {
  return (
    <div>
      <div className="align-items-center mt-5 ms-5">
        <p id="headertext">COX'S BAZAR</p>
        <p>
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <Link id="bookinglink" to={"/login"}>
          Booking <BsArrowRight className="ms-3" />
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;
