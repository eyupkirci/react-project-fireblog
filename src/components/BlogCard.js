import React, { useContext, useState } from "react";
import { updateLike } from "../helpers/firebase";
import "./BlogCard.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";



export default function BlogCard(props) {
  const [like, setLike] = useState(props.like);
  const [comment, setComment] = useState(props.comment);
  const { currentUser } = useContext(AuthContext);


  const updateLikes = () => {
    updateLike(props.id);
    setLike(like + 1);
  };


  return (
    <div className="blog-card-container">
      <div className="blog-card blog-card-img-container"
      >
        <img src={props.image} style={{ padding: '10px', width: "100%", height: "100%" }} alt="blog image" />
      </div>
      <div className="blog-card blog-card-main-container " >
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
        <p>{props.content}</p>
      </div>
      <div className="blog-card blog-card-footer-container ">
        <h2>
          <i className="fas fa-user-circle"></i> {props.author}
        </h2>

        <div className="blog-card-btn-container">

          {!currentUser ?
            <>
              <div>
                <button className="blog-card-btn" onClick={updateLikes}>
                  <i className="fas fa-heart" style={like > 0 ? { color: "red" } : { color: "black" }}></i>
                </button>{like}
              </div>
              <div>
                <button className="blog-card-btn" onClick={updateLikes}>
                  <i className="far fa-comment" style={like > 0 ? { color: "red" } : { color: "black" }} style={like > 0 ? { color: "red" } : { color: "black" }}></i>
                </button>{like}</div>
            </>
            :
            <>
              <div>
                <button className="blog-card-btn" onClick={updateLikes}>
                  <i className="fas fa-heart" style={like > 0 ? { color: "red" } : { color: "black" }}></i>
                </button>{like}
              </div>
              <div>
                <button className="blog-card-btn" onClick={updateLikes}>
                  <i className="far fa-comment" style={like > 0 ? { color: "red" } : { color: "black" }} style={like > 0 ? { color: "red" } : { color: "black" }}></i>
                </button>{like}</div>
              <div>
                <button className="blog-card-btn"><Link to="/detils" ><p>...</p></Link>
                </button>
              </div>
            </>
          }
          
        </div>
      </div>
    </div>
  );
}
