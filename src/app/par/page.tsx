import { title } from "@/app/fonts";
const statsHomePage = ({params}:any) => {
    const GameTitle = params?.id?.replace(/_/g, " ");
    return (
        <main className="flex flex-col py-7 px-5 h-screen overflow-hidden gap-5 w-full">
        <section className={`text-3xl font-semibold ${title.className}`}>
        {GameTitle.toUpperCase()}
      </section>
      </main>
    );
}
 
export default statsHomePage;