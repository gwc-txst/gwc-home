import LinktreeButton from "../components/LinktreeButton";

export default function Links() {
  return (
    <div className="h-screen bg-gradient-to-tr from-[#B6FFDD] via-[#788DFF] to-[#FF94FF]">
      {/* Start header */}
      <div className="bg-black h-24 grid grid-cols-3 items-center">
        <div className="text-white col-span-1 mx-6 font-babe-sans sm:text-2xl text-lg">
          Girls Who Code TXST
        </div>
        <div className="flex space-x-6 col-span-2 justify-end mx-6">
          <div className="text-white">Home</div>
          <div className="text-white">Donate</div>
          <div className="text-white">About</div>
          <div className="text-white">Links</div>
        </div>
      </div>
      {/*  Start links */}
      <div className="text-center text-2xl mt-12">Here are our links!</div>

      <div className="flex flex-col items-center space-y-8 mt-12">
        <LinktreeButton label="Check out our Canvas page!" />
        <LinktreeButton label="Join the Discord here!" />
        <LinktreeButton />
      </div>
    </div>
  );
}
