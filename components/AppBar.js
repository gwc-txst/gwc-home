import Image from "next/image";

const AppBar = () => {
  return (
    <div>
      <nav className="h-32 bg-gradient-to-r from-[#B6FFDD] via-[#788DFF] to-[#FF94FF] grid grid-cols-12">
        <div className="col-span-2 flex justify-center no-wrap border">
          <div className="w-full flex items-center ml-6">
            {/* <Image
              src="/../public/logo.png"
              width="130px"
              height="87px"
              layout="fixed"
            /> */}
          </div>
        </div>
        <div className="col-span-6 border col-start-4 flex justify-center no-wrap">
          <div className="w-full flex justify-center items-center">page1</div>
          <div className="w-full flex justify-center items-center">page2</div>
          <div className="w-full flex justify-center items-center">page3</div>
          <div className="w-full flex justify-center items-center">page4</div>
        </div>
        <div className="col-span-2 col-start-11 border flex justify-center no-wrap">
          <div className="w-full flex justify-end items-center mr-4">other</div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
