const LinktreeButton = ({ label }) => {
  return (
    <div
      className="bg-blue-100 
      text-center w-2/3 py-6 rounded-full 
      hover:bg-blue-200 active:bg-blue-300
      cursor-pointer"
    >
      {label}
    </div>
  );
};

export default LinktreeButton;
