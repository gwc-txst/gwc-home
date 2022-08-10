import Footer from "../components/Footer";
import HeaderSimple from "../components/HeaderSimple";
import LinktreeButton from "../components/LinktreeButton";
import NavBar from "../components/NavBar";
import { LINKS } from "../constants/constant";

export default function Links() {
  return (
    <div className="h-screen bg-gradient-to-tr from-[#B6FFDD] via-[#788DFF] to-[#FF94FF] overflow-auto overscroll-contain">
      <NavBar />

      <HeaderSimple
        headline="Headline"
        title="Our Links"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda expedita quidem sint, dicta molestias quod voluptatum possimus quae dolor praesentium nostrum dolorem repudiandae ipsum fuga explicabo dolores voluptates eum!"
      />
      <div className="flex flex-col items-center space-y-12 pb-36">
        {LINKS.map((item) => (
          <LinktreeButton key={item.name} label={item.name} href={item.href} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
