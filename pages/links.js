import LinktreeButton from "../components/LinktreeButton";

export default function Links() {
  return (
    <div>
      <div className="h-60"></div>
      <div className="text-center text-2xl">Here are our links!</div>

      <div className="flex flex-col items-center space-y-8 mt-12">
        <LinktreeButton label="Check out our Canvas page!" />
        <LinktreeButton label="Join the Discord here!" />
        <LinktreeButton />
      </div>
    </div>
  );
}
