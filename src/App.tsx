import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./styles/theme";
import HomePage from "./pages/Home";
import Mypage from "./pages/Mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/mypage", element: <Mypage /> },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
