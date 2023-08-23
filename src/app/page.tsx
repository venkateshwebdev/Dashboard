import GamesList from "./components/GamesList";
import Sidebar from "./components/Sidebar";

export default function Home (){
  return(
    <main className="flex overflow-hidden">
      <Sidebar />
      <GamesList />
    </main>

  )
}