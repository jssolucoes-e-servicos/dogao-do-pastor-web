import React from "react";

interface IProps {
  imageUrl: string;
  review: string;
  reviewerName: string;
}

function TestimonialCard({ imageUrl, review, reviewerName }: IProps) {
  return (
    <div className="flex flex-col md:flex-row gap-[1.88rem]">
      {/* <div> */}
      <img
        src={imageUrl}
        alt="reviewer profile picture"
        className="w-[6.375rem] h-[5.375rem] rounded-[0.625rem]"
      />
      {/* </div> */}
      <div className="flex flex-col gap-[0.81rem]">
        <p className="text-darkBlue font-bold">{review}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{reviewerName}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
