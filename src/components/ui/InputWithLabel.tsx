import { useState } from "react";
import { toast } from "sonner";
import numbro from "numbro";

type Prop = {
  type?: "text" | "currency" | "number";
  icons?: React.ReactNode;
  label?: string;
  placeholder?: string;
  containerClass?: string;
};
const InputWithLabel = ({
  icons,
  type = "text",
  placeholder = "",
  containerClass = "",
  label,
}: Prop) => {
  //TOdo make currency work well diff from number
  const [value, setValue] = useState<number | string>();
  const handleChange = (data: number | string) => {
    if (type == "text") {
      setValue(data);
    }
    if (type === "number") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (isNaN(parseInt(data))) {
        toast.error("Not a number");
        setValue(value);
        return;
      }
      setValue(data);
    }
    if (type === "currency") {
      try {
        const parsedD = numbro(data).format({ thousandSeparated: true });
        setValue(parsedD);
      } catch {
        toast.error("Not a number");
        setValue(value);
        return;
      }
    }
  };
  return (
    <div
      className={` w-[100%] md:w-[450px]  flex flex-col gap-[15px]  ${containerClass}`}
    >
      {label ? (
        <label className="font-[500] text-[18px] font-rob">{label}</label>
      ) : (
        ""
      )}
      <div className=" px-[24px] bg-[#EDEEEA] rounded-[12px] flex items-center">
        {icons ? icons : ""}
        <input
          type={type.replace("currency", "text")}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          className="block py-[19px] outline-none !appearance-none"
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
