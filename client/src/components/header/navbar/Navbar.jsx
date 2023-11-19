import logo from "../../../assets/logo/logo.png";
import Container from "../../container/Container";
import NavbarLG from "./NavbarLG";
import NavbarSM from "./NavbarSM";

const Navbar = () => {
  return (
    <div className="w-full max-w-screen-xl fixed z-50 bg-black bg-opacity-25 text-white py-2">
      <Container>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center justify-center gap-1">
            <div>
              <img src={logo} alt="logo" className="w-10" />
            </div>
            <div className="text-center">
              <h1 className="font-bold uppercase">BISTRO BOSS</h1>
              <p className="uppercase text-sm">Restaurant</p>
            </div>
          </div>

          <div>
            {/* manus of large devices */}
            <div className="hidden lg:block">
              <NavbarLG />
            </div>

            {/* manus small and medium devices */}
            <div className="block lg:hidden">
              <NavbarSM />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
