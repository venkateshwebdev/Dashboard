const NavbarButton = ({menu,icon,name}:any) => {
    if(menu===undefined){
        menu=true;
    }
    return (
        <div className="flex gap-3 cursor-pointer text-2xl items-center transition-all rounded-md hover:bg-[#00000010] px-6 py-3">
            {icon}
            {menu=== true&&<span className="text-base">{name}</span>}
      </div>
    );
}
 
export default NavbarButton;