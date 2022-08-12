import Footer from "../components/Footer";
import HeaderSimple from "../components/HeaderSimple";
import LinktreeButton from "../components/LinktreeButton";
import NavBar from "../components/NavBar";
import { LINKS } from "../constants/constant";
import Link from "next/link";

export default function Links() {
  return (
    <div className="h-screen bg-gradient-to-tr from-[#B6FFDD] via-[#788DFF] to-[#FF94FF] overflow-auto overscroll-contain">
      <NavBar />

      <HeaderSimple headline="Girls Who Code TXST" title="Our Links" />
      <div className="flex flex-col items-center space-y-12 pb-36">
        {LINKS.map((item) => (
          <Link href={item.href} key={item.name}>
            <div className="bg-gwc-blue-lighter text-xl text-center lg:w-1/2 w-11/12 sm:w-4/5 py-8 rounded-full hover:bg-gwc-pink-lighter active:bg-blue-300 cursor-pointer">
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
