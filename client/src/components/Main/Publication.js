import React from "react";

const Publication = () => {
  return (
    <article>
      <div publi-container>
        <div className="personnal-info">
          <div className="pic">
          <img
            src="./img/photo-profil.png"
            alt="profil"
            className="photo-profil"
          />
          </div>
          <div className="identification">
            Jack Colfmann
          </div>
        </div>
        <div className="publi-title">Le nouveau café au coin de la rue</div>
        <div className="publi-image">
        <img
            src="./img/cafe.png"
            alt="profil"
            className="photo-profil"
          />
        </div>
        <div className="publi-text">Le texte</div>
      </div>
    </article> 
  );
};

export default Publication;
