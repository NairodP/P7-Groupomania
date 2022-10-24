import React from "react";
import Navbar from "../../components/Main/Navbar";

const PubliUploader = () => {
  return (
    <>
      <Navbar />

      <div className="screen-container">
        <div className="upload-container">
          <div className="upload-title">Ajouter une Publication</div>
          <form method="post" action="" className="upload-form">
            <div className="input-group">
              <label htmlFor="publication-title">
                Titre de votre publication :
              </label>
              <input type="text" name="input-title" className="input-title" />
              <span className="msg">Champ Valide</span>
            </div>

            <div className="input-group">
              <label htmlFor="publication-image">
                Image de votre publication :
              </label>
              <input type="file" name="input-image" className="input-image" />
              <span className="msg">Champ Valide</span>
            </div>

            <div className="input-group">
              <label htmlFor="publication-text">
                Texte de votre publication :
              </label>
              <input type="text" name="input-text" className="input-text" />
              <span className="msg">Champ Valide</span>
            </div>

            <button type="submit" className="publi-btn">
              Publier
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PubliUploader;
