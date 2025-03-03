import * as React from "react";
import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
import { MdOutlineCalendarMonth } from "react-icons/md";

import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="!font-rob !font-[500]">
      <Popover>
        <PopoverTrigger asChild>
          <div
            //   variant={"outline"}
            className={cn(
              "min-w-[189px] !font-rob !font-[400]  rounded-[12px] bg-[#EDEEEA] py-[15px] px-[16px] flex gap-[12px] cursor-pointer",
              !date && "text-muted-foreground"
            )}
          >
            <MdOutlineCalendarMonth size={25} color="#1C1B1F" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            // initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
