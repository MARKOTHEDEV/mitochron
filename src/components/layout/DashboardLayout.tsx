import Nav from "../ui/Nav";
import SideBar from "../ui/SideBar";

type Prop = React.PropsWithChildren;
const DashboardLayout = ({ children }: Prop) => {
  return (
    <div className="font-robot">
      <Nav />
      <div className="flex h-[90vh]">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};
export default DashboardLayout;
