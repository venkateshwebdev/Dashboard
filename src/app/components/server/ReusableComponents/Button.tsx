const Button = ({name,active}:any) => {
    return (
        <button className={`shadow-sm flex-1 h-full rounded-lg text-center ${active?"bg-[#ADD2B5]":"bg-[#ADD2B550]"}`}>{name}</button>
    );
}
 
export default Button;