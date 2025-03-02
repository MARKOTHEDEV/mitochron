import React from "react";
import {
  Drawer,
  //   DrawerClose,
  DrawerContent,
  //   DrawerDescription,
  //   DrawerFooter,
  //   DrawerHeader,
  //   DrawerTitle,
  //   DrawerTrigger,
} from "@/components/ui/drawer";

type Prop = React.PropsWithChildren<{
  open: boolean;
  setOpen: any;
  direction?: "bottom" | "left" | "right" | "top";
  className?: string;
}>;
const CustomDrawer = ({
  className = "",
  open,
  setOpen,
  children,
  direction,
}: Prop) => {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(!open);
      }}
      direction={direction}
    >
      {/* <DrawerTrigger>Open</DrawerTrigger> */}
      <DrawerContent className={className}>{children}</DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
