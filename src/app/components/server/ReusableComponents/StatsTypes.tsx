import { IoFootstepsSharp } from "react-icons/io5";
import {AiFillFire} from "react-icons/ai"
import {TbPlayVolleyball} from "react-icons/tb"
import {MdSportsScore} from "react-icons/md"
import {BiRun,BiSolidTimeFive } from "react-icons/bi";
const stylingObj:any = {
    score:{color:"#F8961E",color2:"#14C9C9",units:"points",imagePath:<MdSportsScore />},
    speed:{color:"#165DFF",units:"Kmph",imagePath:<BiRun   />},
    calories:{color:"#FF5C00",units:"cal",imagePath:<AiFillFire   />},
    steps:{color:"#254682",units:"steps",imagePath:<IoFootstepsSharp   />},
    shots:{color:"#9DC284",units:"shots",imagePath:<TbPlayVolleyball   />},
    duration:{color:"#FF4646",units:"min",imagePath:<BiSolidTimeFive  />},
}
export default stylingObj;