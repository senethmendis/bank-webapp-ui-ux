import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 flex ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="disco" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discounde For
            <span className="text-white"> 1 month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white">
            {" "}
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generaation </span>
          </h1>
          <div className="ss:flex hidden md:m-4 m-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:leading-[100px] leading-[68px] ss:text-[52px] w-full text-[52px] text-white">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {" "}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam totam
          velit sit voluptates corrupti nulla voluptas rem libero, sunt
          deleniti, repellat quae nam quas eligendi repellendus exercitationem
          necessitatibus error debitis?
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="arm" className="w-full h-full relative z-[5]" />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {" "}
        <GetStarted />{" "}
      </div>
    </section>
  );
};

export default Hero;
