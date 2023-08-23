import GamesList from "./components/GamesList";
import Sidebar from "./components/Sidebar";

export default function Home (){
  return(
    <main className="h-[100vh] flex overflow-hidden max-sm:flex-col max-sm:overflow-hidden">
      <Sidebar />
      <GamesList />
    </main>

  )
}