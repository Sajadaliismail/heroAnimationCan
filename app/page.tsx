import Link from "next/link";
import Carousal from "./components/Carousal";
import Apple from "./components/AppleComponent";
import StrawBerry from "./components/StrawBeryCompnent";
import Orange from "./components/OrangeComponent";

export default function Home() {
  const arr = [<StrawBerry key={1} />, <Orange key={2} />, <Apple key={3} />];
  return (
    <div className="h-[100vh] overflow-hidden">
      <main className="">
        <header className="flex flex-row justify-evenly w-full h-12 text-3xl z-50  absolute ">
          <nav className="flex flex-row justify-evenly w-full h-25 py-5 text-white font-bold">
            <div>Logo</div>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <div className="h-[100vh]">
          <Carousal scenes={arr} />
        </div>
      </main>
    </div>
  );
}
