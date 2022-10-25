import React from "react";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Main/Navbar";
import Thread from "../components/Thread";
import NewPostForm from "../components/Post/NewPostForm";

const Home = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <div>
      <Navbar />
      <div className="welcome">
        <img
          src={"http://localhost:5000/" + userData.picture}
          alt="profil"
          className="photo-profil"
        />
        <div className="vertical-line"></div>
        <div className="anim">
          <Typewriter
            options={{
              strings: `Bonjour ${userData.firstName} ${userData.lastName} 😀`,
              autoStart: true,
              delay: 150,
            }}
          />
        </div>
      </div>
      <div className="home">
        <div className="main">
          <div className="home-header">
            <NewPostForm />
          </div>
          <Thread />
        </div>
      </div>
    </div>
  );
};

export default Home;
