import { Outlet } from "react-router-dom";
import { ThemeProvider, media } from "./styles/theme";

import NavBar from "./components/NavBar";
import { Suspense } from "react";
import { SyncLoader } from "react-spinners";
import styled from "@emotion/styled";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Container>
        <Suspense
          fallback={
            <FallBackContainer>
              <SyncLoader color="#E6E6E6" />
            </FallBackContainer>
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const FallBackContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  height: calc(100svh - 120px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  ${media.pc} {
    min-width: 984px;
  }
  ${media.mobile} {
    overflow-x: hidden;
  }
`;
