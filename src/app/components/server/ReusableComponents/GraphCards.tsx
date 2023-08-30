import { Donut } from "./Charts/Donut";
import PieChart from "./Charts/PieChart";
import stylingObj from "./StatsTypes";
const GraphCards = (props: any) => {
    const current = stylingObj[`${props.name.toLowerCase()}`]
  return (
    <main className="bg-[#ebebeb] flex flex-col rounded-xl shadow-md p-5">
      {/* topNavbar */}
      <section className="w-full flex justify-between font-semibold flex-wrap">
        <span>{props.name}</span>
        <div className={`flex gap-2 items-center justify-center`} style={{color:current?.color}} >
          <span>{props.done}</span>/<span style={{color:current?.color2}}>{props.target}</span>
          <span className="text-xs font-normal">{current?.units}</span>
        </div>
      </section>
      {/* ChartContainer */}
      <div className="mx-[20%] lg:mx-[30%]">
        {props.type.toLowerCase() === "score" ? (
          <PieChart scored={props.done} target={props.target}   />
        ) : (
            <div className="flex">
                <Donut scored={props.done} target={props.target} color={current?.color} imagePath={current?.imagePath} />
            </div>
        )}
      </div>
      </main>
  );
};

export default GraphCards;
