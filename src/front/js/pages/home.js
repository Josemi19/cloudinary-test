import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import CloudinaryUploadWidget from "./upload";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <CloudinaryUploadWidget />
      <div className="d-flex flex-column">
        {store.imgUrls.map((imgUrl) => {
          return (
            <img src={imgUrl} style={{ height: "20rem", width: "auto" }} />
          );
        })}
      </div>
    </div>
  );
};
