import LinktreeButton from "../components/LinktreeButton";

export default function Links() {
  return (
    <div className="h-cover bg-gradient-to-tr from-[#B6FFDD] via-[#788DFF] to-[#FF94FF]">
      {/* Start header */}
      <div className="bg-black h-24 grid grid-cols-3 items-center">
        <div className="text-white col-span-1 mx-6 font-babe-sans sm:text-2xl text-lg cursor-pointer">
          Girls Who Code TXST
        </div>
        {/* We could probably make these buttons their own class for cleaner code */}
        <div className="flex space-x-6 col-span-2 justify-end mx-6 text-white">
          <div className="cursor-pointer hover:text-blue-200">Home</div>
          <div className="cursor-pointer hover:text-blue-200">Donate</div>
          <div className="cursor-pointer hover:text-blue-200">About</div>
          <div className="cursor-pointer hover:text-blue-200">Links</div>
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
      {/* Having trouble putting space under the last button */}
    </div>
  );
}
