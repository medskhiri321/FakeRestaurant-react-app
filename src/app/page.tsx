
import Sect from "@/components/component/top_selling";
import Landing from "@/components/component/landing_page" ;

export default function Home() {
  return (
    <div>
      <Landing></Landing>
      <Sect></Sect>
      <footer className="flex justify-center h-30 bg-slate-500 p-4"> made by mohamed skhiri 2024</footer>
    </div>
  );
}
