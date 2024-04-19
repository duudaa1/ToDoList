import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  color:white;

  h1 {
    color: #333;
    font-size: 5rem;
    color:white;
  }

  h3 {
    color: #333;
    font-size: 1.5rem;
    color:white;
  }

  div {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: space-evenly;
  }

  label {
    color: #333;
    font-size: 19px;
    color:white;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid gray;
    
    outline: none;
  }

  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 17px;
  }

  option {
    font-size: 17px;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 17px;
  }

  button:hover {
    background-color: #444;
  }
`;
