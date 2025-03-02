import { MdOutlineChat } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
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
      icon: <img src="/grid_view.png" className="block w-[24px]" />,

      link: "dashbaord",
    },
    {
      name: "Approval workflow",
      //   icon: <MdOutlineAccountTree size={24} color="#252624" />,
      icon: <img src="/account_tree.png" className="block w-[24px]" />,

      link: "workflow",
    },
    {
      name: "Buget room",
      //   icon: <MdAccountBalance size={24} color="#252624" />,
      icon: <img src="/account_balance.png" className="block w-[24px]" />,

      link: "room",
    },
    {
      name: "Analytics",
      icon: <img src="/monitoring.svg" className="block w-[24px]" />,
      link: "analytics",
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  // Set a query parameter
  const setQueryParam = (routeName: string) => {
    setSearchParams({ maintab: routeName });
  };
  return (
    // 850px
    <div className="bg-gray px-[22px] py-[14px] rounded-[24px] flex items-center justify-between w-[769px] h-[76px]">
      {links.map((d, index) => (
        <div
          className={`cursor-pointer flex items-center justify-center gap-[8px]  px-[21px] h-[60px] rounded-[16px] text-nowrap hover:hover: ${
            d?.link == searchParams.get("maintab") ? "bg-white" : ""
          } `}
          key={index}
          onClick={() => {
            setQueryParam(d.link);
          }}
        >
          {d.icon}
          <p className="text-primary text-[18px] font-[500]">{d.name}</p>
        </div>
      ))}
    </div>
  );
};

const Nav = () => {
  // const
  return (
    <div className="border-b-[1px] border-b-[#C0C9C0] ">
      <div className="px-[48.5px] py-[21px] flex items-center justify-between">
        <div className="flex items-center gap-[48px]">
          <img src="/vendallogo.png" className="block w-[177px]" alt="" />
          {/* <div></div> */}
          <NavLinks />
        </div>

        <div className="flex gap-[16px]">
          <NavIcons icon={<FaRegBell size={21} />} />
          <NavIcons icon={<MdOutlineChat size={21} />} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
