import { css } from "@emotion/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AdminMenu } from "~/components/admin-menu-bar";
import { Spacing } from "~/components/layout/Spacing";

const AdminPage = () => {
  return (
    <>
      <AdminMenu />
      <Spacing size={121} />
      <div
        css={css`
          width: 100%;
          max-width: 1016px;
          min-width: 810px;
          padding: 0 16px;
          margin: auto;
        `}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default AdminPage;
