import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] mr-0 my-5 feedback-card max-w-[370px] md:mr-10 sm:mr-5">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="text-white font-poppins font-normal text-[18px] leading-[32px] my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-white font-poppins font-semibold text-[20px] leading-[32px] ">
            {name}
          </h4>
          <p className="text-dimWhite font-poppins font-semibold text-[16px] leading-[24px] ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;


