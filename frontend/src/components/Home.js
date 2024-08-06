import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";

import { GET_ALL_QUOTES } from "../graphql/queries";
import Posts from "./Posts";
import Loader from "./Loader";
import mongoose from "mongoose";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <Loader />;
  if (error) {
    console.log(error.message);
  }
  if (data.quotes.length == 0) {
    <h1>No quotes</h1>;
  }
  // useEffect(() => {
  //   fetch("http://localhost:4000", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //       query{
  //         quotes{
  //           name
  //           by{
  //             _id
  //             firstname
  //           }
  //         }
  //       }
  //       `,
  //       // variables:{

  //       // }
  //     }),
  //   })
  //     .then((res) => {
  //       // console.log(res);
  //       return res.json();
  //     })
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div className="container">
      {data.quotes.map((quote) => {
        return (
          <>
            <Posts
              quoteId={quote._id}
              key={quote._id}
              by={quote.by._id}
              firstname={quote.by.firstname}
              name={quote.name}
            />
          </>
        );
      })}
    </div>
  );
}
