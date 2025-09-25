import styled from "styled-components";

export const Main = styled.main`
  margin: 0 14px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 24px;

  input{
    width: 100%;
    height: 44px;
    border: 0;
    padding: 0 8px;
    border-radius: 4px;
    outline: none;
  }

  button{
    background: transparent;

  }
`;

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 14px;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  th{
    color: #fff;
  }
  tr{
    background-color: #1d1c20;

  }
  td:first-child,
  th:first-child{    
    border-radius: 8px 0 0 8px;
  }
  td:last-child,
  th:last-child{    
    border-radius: 0 8px 8px 0;
  }
  th,td{
    padding: 14px;
    text-align: center;
  }
  td{
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    
  }
`;