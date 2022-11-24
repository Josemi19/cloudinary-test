import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [img, setImg] = useState(null);
  const uploadImg = (event) => {
    let formData = new FormData();
    formData.append("file", img, img.name);
    actions.uploadImg(formData);
  };

  return (
    <>
      <div>
        <input
          className="form-control"
          type="file"
          accept="image/png image/jpg"
          onChange={(event) => {
            setImg(event.target.files[0]);
          }}
        />
        <button className="btn btn-primary" onClick={uploadImg}>
          subir foto
        </button>
      </div>
    </>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
