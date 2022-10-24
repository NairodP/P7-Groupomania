import React from "react";
// import { useContext } from "react";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
// import { UidContext } from "../components/AppContext";
import Navbar from "../components/Main/Navbar";
// import Publication from '../components/Home/Publication';



const Home = () => {
  // const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer)

  return (
    <div>
      <Navbar />
      <div className="welcome">
        <img
          src="../uploads/profil/photo-profil.png"
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
    </div>
  );
};

export default Home;
