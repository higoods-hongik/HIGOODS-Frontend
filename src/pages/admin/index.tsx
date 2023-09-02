import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AdminMenu } from "~/components/admin-menu-bar";
import PcContainer from "~/components/layout/PcContainer";

const AdminPage = () => {
  return (
    <>
      <AdminMenu />
      <PcContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PcContainer>
    </>
  );
};
export default AdminPage;
