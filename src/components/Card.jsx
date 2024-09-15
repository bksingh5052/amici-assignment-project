/* eslint-disable react/prop-types */
import { FaHandHoldingHeart } from "react-icons/fa";
import imgs from "../assets/1.jpg";
const Card = ({ title, desc,src, className }) => {
  return (
    <div
      className={`w1/2 xl:px-24 lg:px-10 md:px-6 bg-white text-center ${className}`}
    >
      <div className="flex justify-center ">
        {" "}
        {/* <FaHandHoldingHeart color="#9D2022" className="w-24 h-14 pb-2" /> */}
        <img src={src} className="w-20 h-20 pb-2" />

      </div>

      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
        {title}
      </h5>

      <p className="mb-3 font-normal text-center text-sm md:text-base text-gray-500 ">
        {desc}
      </p>
    </div>
  );
};

export default Card;
