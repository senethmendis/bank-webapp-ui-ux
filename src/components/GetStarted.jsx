import style from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`${style.flexCenter} p-[2px] cursor-pointer bg-blue-gradient w-[140px] h-[140px] rounded-full`}
    >
        <div
          className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${style.flexStart} flex-row`}>
            <p className="font-poppins font-medium leading-[23px] mr-2 tex-[18px] text-gradient">
              <span>Get</span>
            </p>
            <img
              src={arrowUp}
              className="w-[23px] h-[23px] object-contain"
              alt="arrow"
            />
          </div>
          <p className="font-poppins font-medium leading-[23px] tex-[18px] text-gradient">
              <span>Started</span>
            </p>
        </div>
    </div>
  );
};

export default GetStarted;
