/* eslint-disable react/prop-types */
const SubjectCard = ({ item }) => {
  const { subjectNmae, topics, src } = item;
  return (
    <div className="p-4 relative bg-white  rounded-lg shadow-2xl sm:p-8 ">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <div className="relative inline-block">
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 
                    border-l-[20px] border-r-[20px] border-b-[10px] border-transparent 
                    border-b-blue-500"
          ></div>

          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                       font-bold py-2 px-4 rounded-md"
          >
            Topics
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h5 className="mb-2 text-xl font-medium text-blue-900 m-0">
          {subjectNmae}
        </h5>
        <div className="flex justify-between gap-5">
          <div className="w-14 rounded-sm  h-1 bg-yellow-400"></div>
          <div className="w-24 rounded-sm  h-1 bg-yellow-400"></div>
        </div>
      </div>

      <div className="flex items-baseline justify-center text-gray-900 ">
        <img src={src} alt="histograph" width={75} height={75} className="mt-4" />
      </div>
      <ul role="list" className="space-y-5 my-7">
        {topics.map((topic, index) => (
          <li className="flex items-center" key={index}>
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 pl-2 ">
              {topic}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectCard;
