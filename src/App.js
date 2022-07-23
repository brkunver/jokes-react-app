import ContextProvider from "./ContextProvider";
import { Container } from "@mui/material";
import Main from "./components/Main";
import Jokes from "./components/Jokes";
function App() {
  return (
    <main>
      <ContextProvider>
        <Container>
          <Main></Main>
          <Jokes></Jokes>
        </Container>
      </ContextProvider>
    </main>
  );
}

export default App;
