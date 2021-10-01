import React, { useState, useContext, useEffect } from "react";
import { continueWithGoogle, createUser } from "./../helpers/firebase";
import { Redirect } from "react-router";
import "../components/BlogCard.css";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import BlogCard from "../components/BlogCard";
import { readData, updatedata } from "../helpers/firebase";
import { BrowserRouter as Router, Route } from "react-router-dom";


export default function Profile() {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    readData(setData);
  }, []);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
     <div>
      {data.map((doc, key) => {
        if (currentUser.email === doc.data().author) {
          return (
            <BlogCard
              id={doc.id}
              like={doc.data().get_like_count}
              comment={doc.data().get_comment_count}
              content={doc.data().content}
              title={doc.data().title}
              author={doc.data().author}
              image={doc.data().image}
              // date={doc.data().published_date.toString()}
              key={key}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
