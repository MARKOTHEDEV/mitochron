import Nav from "../ui/Nav";

type Prop = React.PropsWithChildren;
const DashboardLayout = ({ children }: Prop) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};
export default DashboardLayout;
