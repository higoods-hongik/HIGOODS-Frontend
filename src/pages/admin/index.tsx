import { css } from "@emotion/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AdminMenu } from "~/components/admin-menu-bar";
import PcContainer from "~/components/layout/PcContainer";
import { Spacing } from "~/components/layout/Spacing";

const AdminPage = () => {
  return (
    <>
      <AdminMenu />
      <Spacing size={121} />
      <PcContainer css={css({ maxWidth: 1016 })}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </PcContainer>
    </>
  );
};
export default AdminPage;
