import stylingObj from "./StatsTypes";
const SessionCard = (props: any) => {
    const current = stylingObj[`${props.name.toLowerCase()}`]
  return (
    <main className="bg-[#ebebeb] flex flex-col rounded-xl shadow-md p-5">
      {/* topNavbar */}
      <section className="w-full flex justify-between font-semibold flex-wrap">
        <span>{props.name}</span>
        <div className={`flex gap-2 items-center justify-center`} style={{color:current?.color}} >
          <span>{props.done}</span>
          <span className="text-xs font-normal">{current?.units}</span>
        </div>
      </section>
      <div className="w-full h-full flex items-center justify-center text-6xl max-sm:text-4xl pt-5" style={{color:current?.color}}>{current?.imagePath}</div>
    </main>
  );
};

export default SessionCard;
