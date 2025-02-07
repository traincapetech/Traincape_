import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./Loading.css";

function Loading() {
  return (
    <div className="spiner">
      <FadeLoader
        color="#21c1a6"
        loading
        size="300px"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
