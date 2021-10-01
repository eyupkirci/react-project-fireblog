import React, { useContext, useState } from "react";
import { updateLike } from "../helpers/firebase";
import "./BlogCard.css";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";



export default function BlogCard(props) {
  const [like, setLike] = useState(props.like);
  const [comment, setComment] = useState(props.comment);
  const { currentUser } = useContext(AuthContext);


  const updateLikes = () => {
    updateLike(props.id);
    setLike(like + 1);
  };

  const history = useHistory()


  const openDetails = (e) => {
    // console.log(e.target.id);
    history.push("/details/" + e.target.id)

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

              {currentUser.email===props.author?
              (
              <div>
                <button className="blog-card-btn"><Link to="/Details" ><i className="far fa-info-square">...</i></Link>
                </button>
              </div>
              )
              :
              null}
            </>
          }
          
        </div>
      </div>
     <div className="blog-card-layer" id={props.id} onClick={(e)=>openDetails(e)}></div>
    </div>
  );
}
