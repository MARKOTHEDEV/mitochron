// /Users/admin/Downloads/.png
//  /Users/admin/Downloads/.png
//   /Users/admin/Downloads/language.png
//    /Users/admin/Downloads/mail.png
//    /Users/admin/Downloads/.png

import { Button } from "./button";

const SideBarCard = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="border-[1px] border-[#C0C9C0] rounded-[24px] px-[23px] py-[24px] w-[344px]">
      {children}
    </div>
  );
};
const SideBarIconAndText = ({
  icon,
  name,
  className = "",
}: {
  icon: string;
  name: string;
  className?: string;
}) => (
  <div className={`gap-[12px] flex items-center ${className}`}>
    <img src={icon} alt="" />
    <p className="font-rob font-[400] text-[18px]">{name}</p>
  </div>
);
const Brody = () => {
  return (
    <SideBarCard>
      <div className="flex gap-[24px] items-center  pb-[24px] ">
        <img src="/3d_avatar_22.png" className="" alt="" />
        <h1 className="font-rob font-[500] text-[28px]">Ventura Brody</h1>
      </div>

      <div className="flex flex-col gap-[1rem]">
        <SideBarIconAndText icon="/mail.png" name="venturaBrody@co.ng" />
        <SideBarIconAndText icon="/language.png" name="Lagos, Nigeria" />
      </div>
      <Button variant="outline" className="mt-[1rem]">
        <img src="/page_info.svg" alt="" />
        <p>Set up your account</p>
      </Button>
    </SideBarCard>
  );
};
const Teams = () => (
  <SideBarCard>
    <div className="flex items-center justify-between">
      <p className="text-primary font-[500] font-robo text-[18px]">TEAMS</p>
      <p className="inline-block py-[10px] px-[12px] rounded-[8px] text-primary font-[500] text-[14px] bg-[#C5FCD6]">
        Basic User
      </p>
    </div>
    <div className="flex flex-col gap-[1rem] mt-[28px] ">
      <div className="flex items-center justify-between">
        <SideBarIconAndText icon="/source_environment.png" name="Departments" />
        <p className="text-[18px] font-[400]">0</p>
      </div>
      <div className="flex items-center justify-between ">
        <SideBarIconAndText icon="/communities.png" name="Units" />
        <p className="text-[18px] font-[400]">0</p>
      </div>
    </div>
    <Button variant="outline" className="mt-[1rem]">
      <img src="/upgrade.png" alt="" />
      <p>Upgrade your plan</p>
    </Button>
  </SideBarCard>
);

const Links = () => (
  <SideBarCard>
    <p className="text-primary font-[500] font-robo text-[18px] pb-[1rem]">
      LINKS
    </p>
    <SideBarIconAndText
      icon="/captive_portal.png"
      name="LinkedIn"
      className="border-[1px] border-[#C0C9C0] p-[1rem] rounded-[12px]"
    />
  </SideBarCard>
);
const SideBar = () => {
  return (
    <div className="w-[100%]   md:border-r-[1px] overflow-y-scroll md:w-[416px] md:border-r-[#C0C9C0] ">
      <div className="pb-[32px]  pt-[24px] md:pl-[47px] md:pr-[24.5px] flex flex-col gap-[24px]">
        <Brody />
        <Teams />
        <Links />
      </div>
      <div className="border-t-[1px] border-t-[#C0C9C0] py-[32px] px-[42px] ">
        <div className="w-[285px] flex items-center justify-between">
          <p>Terms of Service</p>
          <div className="bg-primary h-[8px] w-[8px] rounded-[50%]" />
          <p>Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
