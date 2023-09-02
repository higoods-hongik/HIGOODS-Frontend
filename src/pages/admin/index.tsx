import { Outlet } from "react-router-dom";
import { AdminMenu } from "~/components/admin-menu-bar";
import PcContainer from "~/components/layout/PcContainer";

const AdminPage = () => {
  return (
    <>
      <AdminMenu />
      <PcContainer>
        <Outlet />
      </PcContainer>
    </>
  );
};
export default AdminPage;
