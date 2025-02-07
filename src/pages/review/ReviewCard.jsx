import React from "react";
import reviewSection from "./ReviewCard.module.css";
import { Icon, StarIcon } from "@chakra-ui/icons";

const ReviewCard = ({ _id, name, image, review, reviewtime, star }) => {
  return (
    <div className={reviewSection.reviewCard}>
      <div className={reviewSection.reviewdiv}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>{review}</p>
        <p>{reviewtime}</p>
        <p>
          {Array.from({ length: star }).map((_, index) => (
            <Icon as={StarIcon} key={index} color="yellow" p="7px" />
          ))}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
