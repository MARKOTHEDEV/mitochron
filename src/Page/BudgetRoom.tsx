import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/DatePicker";
import InputWithLabel from "@/components/ui/InputWithLabel";
import { useState } from "react";

const BudgetRoom = () => {
  const tabs = [
    "Currency and Taxes",
    "Budget line",
    "Budget",
    "Budget control",
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const NigeriaIcon = () => (
    <div className="flex items-center gap-[8px] pr-[8px]">
      <img src="/nigeria.png" alt="" />
      <p className="text-[18px] font-[600] font-rob">NGA</p>
    </div>
  );
  const UsaIcon = () => (
    <div className="flex items-center gap-[8px] pr-[8px]">
      <img src="/Flag_of_the_United_States 1.png" alt="" />
      <p className="text-[18px] font-[600] font-rob">USA</p>
    </div>
  );
  return (
    <div>
      <div className="border-b-[1px] border-b-[#C0C9C0] flex items-center px-[24px] overflow-scroll">
        {tabs.map((item, index) => (
          <p
            key={index}
            className={`relative  text-nowrap  py-[20px] px-[21.5px] tet-primary font-[500] text-[18px] cursor-pointer before:content-[''] before:absolute before:left-0 before:bottom-0 ${
              currentTab == item ? "before:bg-primary" : ""
            } before:w-[100%] before:h-[3px]`}
            onClick={() => {
              setCurrentTab(item);
            }}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="border-b-[1px] border-b-[#C0C9C0] px-[25px] py-[18px]     gap-[1rem] flex flex-col md:flex-row md:items-center md:gap-[32px]">
        <p className="font-[500]  text-[20px] ">Financial year</p>
        <div className="flex flex-col gap-[2rem] md:flex-row md:items-center md:gap-[24px]">
          <div className="flex items-center gap-[16px]">
            <p className="font-[500] text-[18px]">Start</p>
            <DatePicker />
          </div>
          <div className="flex items-center gap-[16px]">
            <p className="font-[500] text-[18px]">End</p>
            <DatePicker />
          </div>
        </div>
      </div>

      <div className="p-[24px] flex  flex-col gap-[1rem] md:flex-row md:gap-[24px] ">
        <div className="border-[1px] border-[#C0C9C0] rounded-[24px] overflow-hidden md:w-[498px]">
          <p className="text-primary font-[500] font-rob py-[20px] px-[24px]">
            Currency
          </p>
          <div className="bg-[#C0C9C0] w-[100%] h-[1px]" />
          <div className="p-[24px] flex flex-col gap-[24px]">
            <InputWithLabel
              label="Principal Currency"
              icons={<NigeriaIcon />}
              // containerClass="w-[100%]"
              placeholder="Naira"
              type="currency"
            />
            <InputWithLabel
              label="Tax type"
              type="text"
              placeholder="Value Added Tax (VAT)"
            />

            <div className="flex flex-col md:flex-row md:w-[450px] gap-[24px]">
              <InputWithLabel
                label="Tax rate"
                type="number"
                placeholder="Fixed amount"
                containerClass="md:!w-[47%]"
              />
              <InputWithLabel
                label="Tax rate unit"
                type="number"
                containerClass="md:!w-[47%]"
                placeholder="30.00"
              />
            </div>
          </div>
          <div className="bg-[#C0C9C0] w-[100%] h-[1px] mt-[118px]" />

          <div className="py-[23px] px-[24px]">
            <Button className="w-[100%] md:w-[453px]">
              <img src="/greencontract_edit.png" alt="" />
              Edit Overview
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="border-[1px] border-[#C0C9C0] rounded-[24px] overflow-hidden md:w-[498px]">
            <p className="text-primary font-[500] font-rob py-[20px] px-[24px]">
              Conversion rate
            </p>
            <div className="bg-[#C0C9C0] w-[100%] h-[1px]" />
            <div className="p-[24px] flex flex-col gap-[24px]">
              <InputWithLabel
                icons={<NigeriaIcon />}
                placeholder="100,000"
                type="currency"
              />
              <InputWithLabel
                icons={<UsaIcon />}
                placeholder="60.8142"
                type="currency"
              />
            </div>
          </div>
          <div className="bg-lightred px-[24px] py-[17.32px] rounded-[24px] md:w-[498px]">
            <p className="text-red font-[400] font-rob text-[18px]">
              You cannot change the Principal Currency once the financial year
              has commenced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BudgetRoom;
