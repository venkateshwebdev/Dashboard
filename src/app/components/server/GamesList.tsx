import { title } from "@/app/fonts";
import Carousel from "../client/Carousel";
import { carouselDataList } from "./CarouselData";
const GamesList = () => {
    return(
      <main className="flex flex-col h-screen px-[3%] py-[3%] w-screen gap-4">
        <section className={`text-3xl font-semibold ${title.className}`}>Games Available</section>
        <Carousel carouselDataList={carouselDataList}    />
      </main> 
    )
}
export default GamesList;