import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 7px 64px 0 rgba(19, 36, 78, 0.07);
  background-color: rgba(19, 36, 78, 0.07);
  padding: 10px;
  margin: 15px;
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .spent {
    width: 57px;
    height: 57px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .budget-card {
    margin: 20px;
  }
  .budger-content-wrapper {
    font-size: 18px;
    line-height: 1.11;
    color: #13244e;
  }
  .budger-content-name {
    font-weight: 600;
  }
  select {
    width: 76px;
    height: 26px;
    border-radius: 6px;
    background-color: rgba(77, 213, 153, 0.2);
    border: none;
    color: #4dd599;
  }
  .budget-card-heading {
    display: flex;
    justify-content: space-between;
  }
  .heading-content {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    span {
      font-size: 17px;
      font-weight: 600;
      line-height: 1.29;
      color: #13244e;
      margin-left: 5px;
    }

    .total-budget {
      width: 150px;
      height: 30px;
      border-radius: 6px;
      background-color: rgba(81, 44, 98, 0.2);
      background-color: ${({ iconBG }) => iconBG};
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.05;
        color: #512c62;
        margin: 0;
      }
    }
  }
  .budget-body {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Status = styled.div`
         width: 385px;
         height: 165px;
         border-radius: 6px;
         box-shadow: 0 7px 64px 0 rgba(19, 36, 78, 0.07);
         background: #ffffff;
         margin: 10px;
         padding: 10px;
         display: flex;
         justify-content: flex-start;
         align-items: center;
         flex-direction: column;
         .status-header {
           display: flex;
           align-items: center;
           img {
             width: 32px;
             height: 32px;
             margin-right: 10px;
           }
           h1 {
             font-size: 17px;
             font-weight: 600;
             font-stretch: normal;
             font-style: normal;
             line-height: 1.29;
             letter-spacing: normal;
             color: #13244e;
             margin: 0;
           }
         }
         .status-footer {
           width: 80%;
           margin-top: 20px;
           height: 71px;
           border-radius: 8px;
           background-color: #f0f3f9;
           text-align: center;
           display: flex;
           justify-content: center;
           align-items: center;
           font-size: 37px;
           font-weight: 600;
           font-stretch: normal;
           font-style: normal;
           line-height: 0.59;
           letter-spacing: normal;
           color: #000000;
         }
       `;
