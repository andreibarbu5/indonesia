import Navbar from "../src/components/Navbar.js";
import Hero from "../src/components/Hero.js";
import wallpaper from "./assets/wallpaper.jpg";
import phonewallpaper from "./assets/phonewallpaper.jpg";
function App() {
  return (
    <div className="h-screen relative">
      {/* PHONE WALLPAPER */}
      <div className="flex md:hidden">
        <div className="absolute flex w-full  h-full ">
          <img
            src={phonewallpaper}
            alt=""
            className="  object-cover w-full h-full   "
          />
        </div>
      </div>
      {/* OVERLAY */}
      <div className="absolute flex md:hidden z-10 w-full  h-full bg-black/40"></div>

      {/* WEB WALLPAPER */}
      <div className="hidden md:flex">
        <div className="absolute flex w-full  h-full ">
          <img
            src={wallpaper}
            alt=""
            className="  object-cover w-full h-full  "
          />
        </div>
      </div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
