import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DonateOptions from "../components/DonateOptions";
import { useState } from "react";
import AlertBar from "../components/AlertBar";

export default function Donate() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <NavBar />
      <DonateOptions setLoading={setLoading} />
      <Footer />
      {loading && (
        <div className=" sm:top-16 z-30 inset-x-0 flex justify-center fixed bottom-12">
          <AlertBar />
        </div>
      )}
    </div>
  );
}
