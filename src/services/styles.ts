import styled from "styled-components";

export const StyledList = styled.section`
  display: flex;
  width: 70%;
  height: 100%;
  align-items: flex-end;

  @media (max-width: 768px) {
    margin-top: 10%;
    width: 85%;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    background-color: gray;
    padding: 5px;
    border-radius: 10px 10px 0 0;

    li {
      display: flex;
    }
  }
`;

export const StyledItemList = styled.div`
  width: 100%;
  padding: 7px;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
`;

export const StyledStatusColor = styled.hr<{ status: string | undefined }>`
  width: 20px;
  border-radius: 50px;
  border: none;

  background-color: ${(props) => {
    switch (props.status) {
      case "todo":
        return "red";
      case "doing":
        return "yellow";
      case "done":
        return "green";
      default:
        return "red";
    }
  }};
`;
