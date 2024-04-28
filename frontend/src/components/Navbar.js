import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <Link to="/" className="right brand-logo">
            Quotes
          </Link>

          <ul id="nav-mobile" className="left hide-on-med-and-down">
            {token ? (
              <>
                <li>
                  <Link to="/profile">
                    <img
                      className="circle responsive-img"
                      style={{
                        border: "2px solid",
                        display: "inline-block",
                        marginTop:"3px",
                        backgroundColor:"none"

                      }}
                      src={`https://robohash.org/${""}.png?size=200x200`}
                      alt="dp"
                      width={50}
                      hover="none"
                    />
                  </Link>
                </li>
                {/* <li>
                  <Link to="/create">Create</Link>
                </li> */}
                <li></li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
