import Nav from "../ui/Nav";
import SideBar from "../ui/SideBar";
import { useMediaQuery } from "react-responsive";
import { FaUserLarge } from "react-icons/fa6";
import { useState } from "react";
import CustomDrawer from "../ui/CustomerDrawer";
import { RiCloseLargeFill } from "react-icons/ri";

type Prop = React.PropsWithChildren;

const DashboardLayout = ({ children }: Prop) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = useState(false);
  const handleMobileProfile = () => setOpen(!open);
  return (
    <div className="font-robot">
      <Nav />
      <div className={` flex h-[90vh]`}>
        {!isTabletOrMobile ? <SideBar /> : ""}
        <main
          className={`${
            isTabletOrMobile ? "relative  w-[100%]" : "md:w-[1000px] "
          }`}
        >
          {children}

          <div
            onClick={handleMobileProfile}
            className="cursor-pointer absolute bottom-30 right-8 w-[45px] h-[45px] bg-primary rounded-[50%] text-white flex items-center justify-center cursor-pointer md:hidden"
          >
            <FaUserLarge />
          </div>
        </main>
      </div>

      <CustomDrawer
        className="!w-[400px]  !h-[100vh]  overflow-scroll"
        direction="left"
        open={open}
        setOpen={setOpen}
      >
        <div className="w-[100%] flex flex-col items-center justify-center bg-white   ">
          <RiCloseLargeFill
            size={30}
            className="block ml-auto translate-x-[-40px] translate-y-[10px] cursor-pointer "
            onClick={() => {
              setOpen(false);
            }}
          />
          <div className=" ">
            <SideBar />
          </div>
        </div>
      </CustomDrawer>
    </div>
  );
};
export default DashboardLayout;
