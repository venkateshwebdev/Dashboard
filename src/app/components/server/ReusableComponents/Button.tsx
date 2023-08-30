import { useRouter, useSearchParams } from "next/navigation"

const Button = ({name,active}:any) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    return (
        <button className={`flex-1 h-full rounded-lg text-center w-full ${tab===name.toLowerCase()?"bg-[#ADD2B5]":"bg-[#ADD2B550]"}`}>{name}</button>
    );
}
 
export default Button;