import { subjects } from "../data";
import SubjectCard from "./SubjectCard";

const Subjects = () => {
  return (
    <div className="mt-12">
      <div className="md:text-4xl text-xl font-semibold text-center">
        <div className="flex flex-col items-center">
          <h1 className="mb-2 text-blue-900 m-0">Spotlight Subjects</h1>
          <div className="w-10 rounded-sm  h-1 bg-blue-900"></div>
        </div>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 mt-16 gap-11 mb-10">
        {subjects.subject.map((item, index) => (
          <SubjectCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
