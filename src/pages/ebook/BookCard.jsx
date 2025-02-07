import React, { useEffect } from "react";
import bookSection from "./BookCard.module.css";
import { Link } from "react-router-dom";

const BookCard = ({
  _id,
  title,
  image,
  author,
  description,
  pdflink,
  Doclink,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={bookSection.reviewCard}>
      <div className={bookSection.reviewdiv}>
        <img className={bookSection.img} src={image} alt={title} />
        <h4 className={bookSection.title}>{title}</h4>
        <h2>{author}</h2>
        <p className={bookSection.description}>{description}</p>

        {/* <p>{reviewtime}</p> */}
        <div className={bookSection.linksDiv}>
          <button className={bookSection.btn}>
            <Link className={bookSection.links} to={pdflink}>
              {" "}
              Read PDF
            </Link>
          </button>
          {/* <Link className={bookSection.links} to={Doclink}>
            {" "}
            DOC
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
