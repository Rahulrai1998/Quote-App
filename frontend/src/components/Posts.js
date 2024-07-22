import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Posts = ({ name, id = "", firstname = "" }) => {
  return (
    <>
      <div className="row">
        <div className="col" style={{ float: "none", margin: "auto" }}>
          <div
            className="card  darken-1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="card-content white-text">
              {firstname ? (
                <span className="card-title">
                  {
                    <div className="header">
                      <Link to={`/profile/${id}`}>
                        <img
                          className="circle responsive-img"
                          style={{
                            border: "2px solid",
                            display: "inline-block",
                          }}
                          src={`https://robohash.org/${firstname}.png?size=200x200`}
                          alt="dp"
                          width={40}
                        />
                        <h6
                          style={{
                            display: "inline-block",
                            verticalAlign: "top",
                            padding: "0px 5px",
                          }}
                        >
                          {firstname}
                        </h6>
                      </Link>
                    </div>
                  }
                </span>
              ) : null}
              <p
                style={{
                  color: "black",
                  textAlign: "start",
                  fontSize: "1.4rem",
                }}
                className="flow-text"
              >
                {`"${name}..."`}
              </p>
            </div>
            <DeletePostBtn>
              <i class="material-icons">delete</i>
            </DeletePostBtn>

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

const DeletePostBtn = styled.div`
  padding: 10px;
`;
