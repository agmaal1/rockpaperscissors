import React from "react";
import { Link } from "react-router-dom";

function Timeout() {
  return (
    <div>
      <div className="row">
        <h2 className="count">Time out!</h2>
      </div>
      <div className="row">
        <Link to="/" className="btn" alt="try again">
          TRY AGAIN!
        </Link>
      </div>
    </div>
  );
}

export default Timeout;
