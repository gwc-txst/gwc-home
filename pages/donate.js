import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import HeaderDropdown from "../components/HeaderDropdown";
import NavBar from "../components/NavBar";
import ShopOptions from "../components/ShopOptions";

export default function Donate() {
  return (
    <div>
      <NavBar />
      {/* <HeaderDropdown /> */}
      <ShopOptions />
      <Checkout />
      <Footer />
    </div>
  );
}
