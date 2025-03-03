import { MdOutlineChat } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import CustomDrawer from "./CustomerDrawer";
import { NavLink as Link } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
// import { MdOutlineAccountTree } from "react-icons/md";
// import { MdAccountBalance } from "react-icons/md";

type NavIconsProps = {
  icon: React.ReactElement;
};
const NavIcons = ({ icon }: NavIconsProps) => (
  <div className="text-primary bg-gray w-[64px] h-[64px] flex items-center justify-center rounded-[50%]">
    {icon}
  </div>
);

const NavLinks = () => {
  const links = [
    {
      name: "Dashboard",
      //   icon: <RxDashboard size={24} color="#252624" />,
      icon: <img src="/grid_view.svg" className="block w-[24px]" />,

      link: "/",
    },
    {
      name: "Approval workflow",
      //   icon: <MdOutlineAccountTree size={24} color="#252624" />,
      icon: <img src="/account_tree.svg" className="block w-[24px]" />,

      link: "/workflow",
    },
    {
      name: "Buget room",
      //   icon: <MdAccountBalance size={24} color="#252624" />,
      icon: <img src="/account_balance.svg" className="block w-[24px]" />,

      link: "/room",
    },
    {
      name: "Analytics",
      icon: <img src="/monitoring.svg" className="block w-[24px]" />,
      link: "/analytics",
    },
  ];

  return (
    //  w-[769px]
    // 850px
    <div className="bg-gray px-[22px] py-[14px] rounded-[24px] flex flex-wrap w-[100%]   items-center justify-between md:h-[76px]  md:w-[769px] md:flex-nowrap">
      {links.map((d, index) => (
        <Link
          // className={`cursor-pointer flex items-center justify-center gap-[8px]  px-[21px] h-[60px] rounded-[16px] text-nowrap hover:hover: ${
          //   d?.link == searchParams.get("maintab") ? "bg-white" : ""
          // } `}
          className={(props) => `
            cursor-pointer flex items-center justify-center gap-[8px]  px-[21px] h-[60px] rounded-[16px] text-nowrap hover:hover: ${
              props.isActive ? "bg-white" : ""
            } 
            `}
          to={d.link}
          key={index}
        >
          {d.icon}
          <p className="text-primary text-[18px] font-[500]">{d.name}</p>
        </Link>
      ))}
    </div>
  );
};

const Nav = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-[1px] border-b-[#C0C9C0] ">
      <div className="px-2 py-4 md:px-[48.5px] md:py-[21px] flex items-center justify-between">
        <div className="flex items-center gap-[48px]">
          <img src="/vendallogo.png" className="block md:w-[177px]" alt="" />
          {!isTabletOrMobile ? <NavLinks /> : ""}
        </div>

        <div className="flex gap-[16px]">
          {isTabletOrMobile ? (
            <NavIcons
              icon={
                <div
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="cursor-pointer"
                >
                  {!open ? (
                    <GiHamburgerMenu size={30} />
                  ) : (
                    <RiCloseLargeFill size={30} />
                  )}
                </div>
              }
            />
          ) : (
            <>
              <NavIcons icon={<FaRegBell size={21} />} />
              <NavIcons icon={<MdOutlineChat size={21} />} />
            </>
          )}
        </div>
      </div>

      <CustomDrawer open={open} setOpen={setOpen}>
        <NavLinks />
      </CustomDrawer>
    </div>
  );
};

export default Nav;
