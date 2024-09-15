import { reasons } from "../data";
import Card from "./Card";

const Reasons = () => {
  return (
    <div className="flex flex-col  mt-12">
      <h1 className="mb-10 md:text-4xl text-xl font-semibold text-center">
        {/* {reasons.title} */} Reasons Why You Should Choose&nbsp;
        <br />
        EssayCorp
      </h1>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 ">
          {reasons.section.map((card, index) => (
            <Card title={card.title} desc={card.desc} src={card.src} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
