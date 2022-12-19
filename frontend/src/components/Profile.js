import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GET_MY_PROFILE } from "../graphql/queries";

export default function Profile() {
  const navigate = useNavigate()
  const { loading, error, data } = useQuery(GET_MY_PROFILE);
  if (loading) return <h2>Loading</h2>;
  if (error) console.log(error);
  if(!localStorage.getItem("token")){
    navigate("/login")
  }
  return (
    <div className="container myStyles">
      {/* <h5>Profile</h5> */}
      <div className="center-align">
        <img
          className="circle responsive-img"
          style={{ border: "2px solid" }}
          src={`https://robohash.org/${data.myprofile.firstname}.png?size=200x200`}
          alt="dp"
        />
        <h5 className="flow-text">{data.myprofile.firstname}</h5>
        <h6>{data.myprofile.email}</h6>
      </div>
      <h5 className="left-align">Quotes</h5>

      {data.myprofile.quotes.map((quote) => {
        return (
          <>
            <blockquote className="left-align">
              <h6>{quote.name}</h6>
            </blockquote>
          </>
        );
      })}
    </div>
  );
}
