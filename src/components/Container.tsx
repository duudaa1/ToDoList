import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:#090f13;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default Container;
