import styled from "styled-components";
import SidebarIMG from "../../assets/sidebar.png";

export const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: ${({ expand }) => (expand ? "100vw" : "90vw")};
  height: 80px;
  background: #ffffff;
  z-index: 13;
  box-shadow: 0px 4px 20px rgba(239, 239, 239, 0.4);
  /* Drop down */

  .dropbtn {
    display: flex;
    align-items: center;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* end Drop down */

  .controls {
    display: flex;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    padding-right: 20px;
    width: 60%;
    justify-content: flex-end;
    .name {
      h1 {
        font-size: 15px;
        font-weight: 600;
        line-height: 1.33;
        color: #000000;
        margin: 0px;
      }
      span {
        font-size: 11px;
        line-height: 1.18;
        color: #000000;
      }
    }
    .avail {
      text-align: center;
      align-items: center;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      padding-right: 20px;
    }
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    cursor: pointer;

    h3 {
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 29px;
      letter-spacing: -0.03em;

      color: #111111;
    }
  }

  @media (max-width: 870px) {
    .status,
    .name {
      display: none;
    }
    .controls {
      padding-right: 40px;
    }
    .profile-pic {
      border-left: none;
    }
  }
`;
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: ${({ expand }) => (expand ? "0px" : "160px")};
  box-sizing: border-box;
`;

export const IconDiv = styled.div`
  .active {
    border-radius: 4px;
    background-color: #0093dd;
  }
  a {
    padding: 5px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.33;
    margin: 0 13px;
    svg {
      margin-right: 10px;
    }
  }
  height: 30px;
  margin-top: 20px;

  img {
    height: 100%;
    width: 70%;
  }
`;
export const FirstIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 15px 0;
`;
export const Scroller = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: auto;
  white-space: nowrap;
  .scroll-card {
    display: inline-block;
    margin-right: 20px;
  }
`;

export const LeftNav = styled.div`
  background: url(${SidebarIMG});
  box-shadow: inset 0px 0px 20px rgba(103, 103, 103, 0.05);
  min-width: 160px;
  top: 0;
  left: ${({ expand }) => (expand ? "-100%" : "0%")};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  @media (max-width: 768px) {
    width: 160px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fafafb;
  height: 100%;
  .children-wrapper {
    padding-top: 80px;
  }
`;
