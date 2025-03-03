type Prop = {
  type?: "text" | "currency" | "number";
  icons?: React.ReactNode;
  label?: string;
  placeholder?: string;
  containerClass?: string;
};
const InputWithLabel = ({
  icons,
  //   type = "text",
  placeholder = "",
  containerClass = "",
  label,
}: Prop) => {
  //TOdo make currency work well diff from number
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
          type="text"
          placeholder={placeholder}
          className="block py-[19px] outline-none"
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
