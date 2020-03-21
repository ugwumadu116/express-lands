import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
  .chat-wrapper {
    border-radius: 6px;
    box-shadow: 0 7px 64px 0 rgba(19, 36, 78, 0.07);
    background: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .bar-content {
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.17px;
    color: #485465;
    h4 {
      margin: 0px;
      font-size: 14px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.22px;
      color: #253858;
    }
  }
  .total-amount {
    display: flex;
    .spent {
      margin: 0 5px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.17px;
      color: #4abba4;
      padding: 3px 5px;
      border-radius: 8.5px;
      background: #f2f2f2;
    }
    .balance {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.17px;
      padding: 1px 5px;
      border-radius: 8.5px;
      background: #f2f2f2;
      color: #c00202;
      margin: 0 5px;
    }
  }
`;
