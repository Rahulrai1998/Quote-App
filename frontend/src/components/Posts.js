import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ name, by }) => {
  return (
    <>
      <div className="row">
        <div className="col s12 m6" style={{ float: "none", margin: "auto" }}>
          <div className="card  darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                {
                  <div className="header">
                    <Link to={`/profile/${by._id}`}>
                      <img
                        className="circle responsive-img"
                        style={{ border: "2px solid", display: "inline-block" }}
                        src={`https://robohash.org/${name}.png?size=200x200`}
                        alt="dp"
                        width={55}
                      />
                      <span className="left-align">{by.firstname}</span>
                    </Link>
                  </div>
                }
              </span>
              <p style={{ color: "black" }} className="flow-text">{name}</p>
            </div>
            {/* <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <blockquote className="left-align">
        <h6>{name}</h6>
        <Link to={`/profile/${by._id}`}>
          <p className="right-align">~ {by.firstname}</p>
        </Link>
      </blockquote> */}
    </>
  );
};

export default Posts;
