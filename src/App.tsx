import Container from "./components/Container";
import { StyledSection } from "./components/Container";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  return (
    <Container>
      <StyledSection>
        <Form />
      </StyledSection>
      <StyledSection>
        <List />
      </StyledSection>
    </Container>
  );
}

export default App;
