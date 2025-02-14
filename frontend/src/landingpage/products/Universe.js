import React from "react";
import SignUp from "../signup/SignUp"
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Investlink Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{width:"100px"}}/>
          <p className="text-small text-muted">Option Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{width:"100px"}} />
          <p className="text-small text-muted">Investment Research Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{width:"100px"}} />
          <p className="text-small text-muted">Systematic Trading Platform</p>
        </div>
       
        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          to={"/signup"}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
