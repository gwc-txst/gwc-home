const LinktreeButton = ({ label }) => {
  return (
    <div
      className="bg-gwc-blue-lighter text-xl 
      text-center lg:w-1/2 w-11/12 sm:w-4/5 py-8 rounded-full 
      hover:bg-gwc-pink-lighter active:bg-blue-300
      cursor-pointer"
    >
      {label}
    </div>
  );
};

export default LinktreeButton;
