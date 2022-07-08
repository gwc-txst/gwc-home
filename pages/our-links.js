import AppBar from "../components/AppBar";
import CuteButton from "../components/CuteButton";

export default function OurLinks() {
  return (
    <div>
      <AppBar />
      <div className="bg-[#242424] h-screen flex flex-col justify-center items-center gap-6">
        <CuteButton label="Shawna" />
        <CuteButton label="Stephen" />
        <CuteButton label="Victoria" />
        <CuteButton label="everyone" />
        <CuteButton label="there" />
      </div>
    </div>
  );
}
