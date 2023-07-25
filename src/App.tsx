import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./styles/theme";

import NavBar from "./components/NavBar";
import { Suspense } from "react";
import { SyncLoader } from "react-spinners";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Suspense fallback={<SyncLoader />}>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
