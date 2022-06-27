import Image from "next/image";

const AppBar = () => {
  return (
    <div>
      <nav className="h-24 bg-red-200 grid grid-cols-12">
        <div className="bg-blue-400 col-span-2 flex justify-center no-wrap">
          <div className="w-full flex items-center ml-4 "></div>
        </div>
        <div className="col-span-6 bg-blue-400 col-start-4 flex justify-center no-wrap">
          <div className="w-full flex justify-center items-center">page1</div>
          <div className="w-full flex justify-center items-center">page2</div>
          <div className="w-full flex justify-center items-center">page3</div>
          <div className="w-full flex justify-center items-center">page4</div>
        </div>
        <div className="col-span-2 col-start-11 bg-blue-400 flex justify-center no-wrap">
          <div className="w-full flex justify-end items-center mr-4">other</div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;
