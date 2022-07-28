import LinktreeButton from "../components/LinktreeButton";
import MenuButton from "../components/MenuButton";

export default function Links() {
  return (
    <div className="h-screen bg-gradient-to-tr from-[#B6FFDD] via-[#788DFF] to-[#FF94FF]">
      {/* Start menu */}
      <div className="bg-black h-24 grid grid-cols-3 items-center">
        <div className="text-white col-span-1 mx-6 font-babe-sans sm:text-2xl text-lg cursor-pointer">
          Girls Who Code TXST
        </div>
        <div className="flex space-x-6 col-span-2 justify-end mx-6">
          <MenuButton label="Home" />
          <MenuButton label="Donate" />
          <MenuButton label="About" />
          <MenuButton label="Links" />
        </div>
      </div>

      {/*  Start links */}
      <div className="text-center text-2xl mt-12 cursor-default">
        Here are our links!
      </div>

      <div className="flex flex-col items-center space-y-8 mt-12">
        <LinktreeButton label="Check out our Canvas page!" />
        <LinktreeButton label="Join the Discord here!" />
        <LinktreeButton />
        <LinktreeButton />
        <LinktreeButton />
        <LinktreeButton />
      </div>
    </div>
  );
}
