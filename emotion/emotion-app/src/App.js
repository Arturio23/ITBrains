import Page from "./page";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Page />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
