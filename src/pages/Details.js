import React, { useEffect, useState, useContext } from "react";
import BlogCard from "../components/BlogCard";
import { readData, updatedata } from "../helpers/firebase";
import { doc } from "@firebase/firestore";
import { async } from "@firebase/util";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Details() {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    readData(setData);
  }, []);

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
