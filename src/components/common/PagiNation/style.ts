import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageNumber = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  background-color: ${(props) => (props.isActive ? "#007bff" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#007bff")};
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#007bff" : "#f0f0f0")};
    color: ${(props) => (props.isActive ? "#ffffff" : "#000000")};
  }
`;