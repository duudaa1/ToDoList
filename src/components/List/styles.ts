import styled from "styled-components";

export const StyledList = styled.section`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 50%;
    padding-top:3px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    background-color: #171f25;
    color:#f1f1f1;
    padding: 10px;
    border-radius: 10px 10px 0 0;

    li {
      display: flex;
      background-color:#090f13;
      padding:10px;
      border-radius:10px;
      box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

      span {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        button {
          padding: 8px;
          margin: 5px;
          border: none;
          border-radius: 100%;
          cursor: pointer;
        }
      }
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
