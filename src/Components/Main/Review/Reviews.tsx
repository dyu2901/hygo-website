import React from "react"
import { FeedbackData } from "../../Shared/Consts"
import SectionWrapper from "../SectionWrapper"
import Review from "./Review"
import Picture1 from "@/assets/Images/Picture1.jpg";
const Reviews = () => {
  return (
    <SectionWrapper id="reviews">
      <h1 className="text-4xl font-bold text-center mb-8">{FeedbackData.heading}</h1>
      <div className="items-center flex flex-col md:flex-row justify-center gap-7 mb-16">
        {FeedbackData.feedbacks.map((user, index) => (
          <Review key={index} index={index} user={user} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <img
          src={Picture1}
          alt="Review Section Image"
          className="w-full h-auto max-h-[500px] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover"
        />
      </div>
    </SectionWrapper>
  )
}

export default Reviews
