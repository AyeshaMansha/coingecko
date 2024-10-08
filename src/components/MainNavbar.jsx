import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
const MainNavbar = () => {
  return (
    <>
      <div className="">
        <div className="border-b-2 border-slate-200 pb-4">
          <NavBar />
        </div>

        <div className="  relative z-20">
          <NavBar2 />
        </div>
      </div>
    </>
  );
};
export default MainNavbar;
