import { BiFace, BiMemoryCard } from "react-icons/bi";
import { Donut } from "./Charts/Donut";
import PieChart from "./Charts/PieChart";
const SubStatsCard = (props: any) => {
    console.log(props.name.toLowerCase())
    const stylingObj:any = {
        score:{color:"#F8961E",color2:"#14C9C9",units:"points"},
        speed:{color:"#165DFF",units:"Kmph"},
        calories:{color:"#FF5C00",units:"cal"},
        steps:{color:"#254682",units:"steps"},
        shots:{color:"#9DC284",units:"shots"},
    }
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
      <div className="mx-5 lg:mx-24">
        {props.type.toLowerCase() === "score" ? (
          <PieChart scored={props.done} target={props.target} />
        ) : (
            <div className="flex">
                <Donut scored={props.done} target={props.target} color={current?.color} />
            </div>
        )}
      </div>
    </main>
  );
};

export default SubStatsCard;
