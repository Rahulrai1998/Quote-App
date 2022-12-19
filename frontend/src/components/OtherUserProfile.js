import { useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GET_MY_PROFILE, GET_OTHERS_PROFILE } from "../graphql/queries";
import { useParams } from "react-router-dom";

export default function OtherUserProfile() {
  const { userId } = useParams();

  console.log(userId)

  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_OTHERS_PROFILE,{
    variables:{
        user_id: userId
    }
    
  });
  console.log(data);
  if (loading) return <h2>Loading</h2>;
  if (error) console.log(error);
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return (
    <div className="container myStyles">
      {/* <h5>Profile</h5> */}
      <div className="center-align">
        <img
          className="circle responsive-img"
          style={{ border: "2px solid" }}
          src={`https://robohash.org/${data.user.firstname}.png?size=200x200`}
          alt="dp"
        />
        <h5 className="flow-text">{data.user.firstname}</h5>
        <h6>{data.user.email}</h6>
      </div>
      <h5 className="left-align">Quotes</h5>

      {data.user.quotes.map((quote) => {
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
