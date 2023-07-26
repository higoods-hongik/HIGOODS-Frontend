import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/admin/info", { replace: true });
  }, [navigate]);

  return (
    <>
      <div>어드민 레이아웃</div>
      <Outlet />
    </>
  );
};
export default AdminPage;
