import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Thread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5); // pour charger uniquement 5 publis au départ
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  // window.innerHeight + document.documentElement.scrollTop = bas de la barre de scroll (donc +1 fait entrer dans la condition)
  // document.scrollingElement.scrollHeight = hauteur totale chargée
  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
      setLoadPost(true);
    }
  }

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts(count));
      setLoadPost(false);
      setCount(count + 5);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadPost, dispatch, count]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post._id} />; //key unique toujours obligatoire pour les maps
          })}
      </ul>
    </div>
  );
};

export default Thread;
