
import { useState } from "react";
import rating from '../assets/rating.jpg'

const Heroic = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOfferChecked, setIsOfferChecked] = useState(false);
  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }
  function handleCheckOfferboxChange() {
    setIsOfferChecked(!isOfferChecked);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center mt-24 p-4">
      {/* Text Section */}
      <div className="max-w-full flex flex-col justify-center items-center text-center md:text-left md:items-start">
        <h1 className="text-4xl font-extrabold uppercase gradient-text md:text-5xl">
          #1 Assignment Writing Service By Experts
        </h1>
        <p className="text-xl mt-4 font-semibold">
          Essay Writing Assistance by Professional Ph.D. Experts. Book Now with
          Us
        </p>
        <p className="text-sm mt-4">1.2M+ trusted & Happy Customers</p>
        <img src={rating} className="mt-4"/>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-5 lg:justify-end w-full p-0 ">
        <div className="shadow-lg flex-auto md:max-w-md w-full p-4 md:p-8 md:border-8 md:border-yellow-300 rounded">
          {/* Description */}
          <div className="mb-6">
            <p className="text-lg font-medium">
              Trusted Assignment Help by Real Experts
            </p>
          </div>

          {/* Email Input and Select */}
          <div className="flex flex-col md:flex-row flex-1 gap-4 mb-6">
            <input
              placeholder="Email"
              className="rounded-md focus:border-gray-500 focus:ring-2 focus:ring-gray-300 w-full  md:max-w-[50%]"
            />
            <select className="border border-gray-500 focus:ring-2 focus:ring-gray-300 rounded-md w-full ">
              <option selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          {/* Subject And Price Input */}
          <div className="flex flex-1 gap-4 mb-6 flex-col md:flex-row">
            <input
              placeholder="Subject"
              className="rounded-md focus:border-gray-500 focus:ring-2 focus:ring-gray-300 w-full  md:max-w-[50%]"
            />

            <div className="flex border border-gray-500 rounded-md border-separate  w-full  md:max-w-[50%]">
              <select className="border-r rounded-md border-r-gray-500 px-3 py-2 bg-white w-20 border-separate">
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </select>
              <input
                type="text"
                className="px-3 py-2 w-full border-none rounded-r focus:outline-none focus:border-none"
                placeholder="Budget"
              />
            </div>
          </div>

          {/* Page and word limit */}
          <div className="flex flex-col md:flex-row gap-2 justify-between items-center mb-6">
            <div className="flex rounded-md border border-gray-500 w-full md:max-w-[50%]">
              <button className="flex items-center justify-center w-8 h-10 border-r border-gray-500 rounded-l-md">
                +
              </button>

              <div className="flex-grow px-8 py-2 text-center">Pages</div>

              <button className="flex items-center justify-center w-8 h-10 border-l border-gray-500 rounded-r-md">
                -
              </button>
            </div>

            <div className=" w-full  md:max-w-[50%]">
              <label className="flex cursor-pointer select-none items-center gap-2">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="sr-only"
                  />
                  {/* Toggle background stays the same */}
                  <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>

                  {/* Dot changes color on checked state */}
                  <div
                    className={`dot absolute left-1 top-1 h-6 w-6 rounded-full transition transform ${
                      isChecked ? "translate-x-6 bg-blue-500" : "bg-white"
                    }`}
                  ></div>
                </div>
                No word limit
              </label>
            </div>
          </div>

          {/* Number and deadline */}

          <div className="flex flex-1 flex-col md:flex-row gap-4 mb-6 justify-between items-center">
            <div className="flex rounded-md border-1 border-gray-500  w-full  md:max-w-[50%]">
              <select className="items-center justify-center  border-r-gray-500 border-r rounded-md pr-6 py-2 bg-white w-20 border-separate">
                <option></option>
                <option>+91</option>
                <option>+1</option>
              </select>
              <input
                type="number"
                className="px-3 py-2 w-full border-none rounded-r focus:outline-none focus:border-none"
                placeholder="Your number"
              />
            </div>

            <input
              placeholder="Deadline"
              className="rounded-md focus:border-gray-500 focus:ring-2 focus:ring-gray-300 w-full  md:max-w-[50%]"
            />
          </div>

          {/* Offer section */}
          <div className="mb-6">
            <label className="flex cursor-pointer select-none items-center gap-2">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isOfferChecked}
                  onChange={handleCheckOfferboxChange}
                  className="sr-only"
                />
                {/* Toggle background stays the same */}
                <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>

                {/* Dot changes color on checked state */}
                <div
                  className={`dot absolute left-1 top-1 h-6 w-6 rounded-full transition transform ${
                    isOfferChecked ? "translate-x-6 bg-blue-500" : "bg-white"
                  }`}
                ></div>
              </div>
              Get flat 10% off on first booking
            </label>
          </div>

          {/* File upload */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="file"
                className="w-full rounded-md border border-stroke text-body-color  outline-none transition file:mr-4 file:rounded file:border-[.5px] file:border-stroke  file:bg-gray-2  file:py-1 file:px-[10px] file:text-sm file:font-medium file:text-dark  focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center">
            <button className="bg-yellow-300 rounded-full px-4 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroic;
