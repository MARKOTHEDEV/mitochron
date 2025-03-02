// import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AiOutlinePlus } from "react-icons/ai";

type TeamCardProp = {
  content: string;
  name: string;
  depart: number;
  unit: number;
  img: string;
  colorVariant?: "yellow" | "blue";
};
const TeamCard = ({
  content,
  name,
  depart,
  unit,
  img,
  colorVariant = "blue",
}: TeamCardProp) => {
  const colorSetup = {
    yellow: {
      contentColor: "#FFE756",
      bodyColor: "#FFF3B5",
    },
    blue: {
      contentColor: "#7DC9FF",
      bodyColor: "#E6F2FF",
    },
  };
  const { bodyColor, contentColor } = colorSetup[colorVariant];
  return (
    <div
      className={`w-[310px] rounded-[24px] px-[15px] py-[16px] flex flex-col  justify-between h-[271px]`}
      style={{ backgroundColor: bodyColor }}
    >
      <div
        className={` px-[16px] py-[12px] rounded-[12px] min-h-[161px]`}
        style={{
          backgroundColor: contentColor,
        }}
      >
        {content}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[12px] ">
          <p className="font-[500] text-[18px]">{name}</p>
          <div className="flex items-center gap-[8px] text-[14px]">
            <p>{depart} Department</p>
            <div className="w-[3.73px] h-[3.73px] bg-primary rounded" />
            <p>{unit} Unit</p>
          </div>
        </div>
        <img src={img} className="block " alt="avatar" />
      </div>
    </div>
  );
};
const LoadingCard = () => {
  return (
    <Skeleton
      className={`w-[310px] rounded-[24px] px-[15px] py-[16px] flex flex-col  justify-between h-[271px]`}
      // style={{ backgroundColor: bodyColor }}
    >
      <Skeleton
        className={` px-[16px] py-[12px] rounded-[12px] min-h-[161px]`}
        // style={{
        //   backgroundColor: contentColor,
        // }}
      ></Skeleton>

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[12px] ">
          <Skeleton className="w-[40px] h-[20px]" />

          <div className="flex items-center gap-[8px] text-[14px]">
            {/* <p>1 Department</p> */}
            <Skeleton className="w-[80px] h-[20px]" />

            <div className="w-[3.73px] h-[3.73px] bg-primary rounded" />
            <Skeleton className="w-[40px] h-[20px]" />
          </div>
        </div>
        <Skeleton className="w-[40px] h-[40px] rounded-[50%]" />
      </div>
    </Skeleton>
  );
};
const CreateDepart = () => {
  return (
    <div className="rounded-[24px] bg-[#F3F4EF] w-[310px] h-[271px] p-[1rem] flex flex-col items-center justify-between">
      <div />
      <div className="bg-[#FFFFFF] w-[88px] h-[88px] rounded-[50%] flex items-center justify-center">
        <div className=" w-[72px] h-[72px] bg-primary rounded-[50%] flex items-center justify-center">
          <AiOutlinePlus size={30} className="text-white" />
        </div>
      </div>

      <Button variant="outline">
        <img src="/contract_edit.png" className="block w-[23.33px]" alt="" />
        Create a department
      </Button>
    </div>
  );
};

const Home = () => {
  return (
    <div className="p-[24px] grid grid-cols-3 gap-[24px] ">
      <TeamCard
        content={`But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each "number."`}
        name="Design Team"
        depart={1}
        unit={2}
        img="/3d_avatar_21.png"
      />
      <TeamCard
        content={`But now you can use Material's dynamic color feature to automatically generate accessible colors assigned to each "number."`}
        name="Design Team"
        depart={1}
        unit={2}
        img="/3d_avatar_21.png"
        colorVariant="yellow"
      />
      <CreateDepart />
      <LoadingCard />
    </div>
  );
};
export default Home;
