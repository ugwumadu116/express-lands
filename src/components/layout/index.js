import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LeftNav,
  TopNav,
  MainContainer,
  RightSection,
  IconDiv,
  FirstIconDiv
} from "./elements";
import Bell from "../../assets/bell.svg";
import Home from "../../assets/home.svg";
import Logo from "../../assets/logo.png";


const Frame = ({ children }) => {
  const [expand, setExpand] = useState(false);

  const onToggle = () => setExpand(expand => !expand);

  return (
    <div>
      <MainContainer>
        <LeftNav expand={expand}>
          <FirstIconDiv>
            <NavLink to="/">
              <img src={Logo} alt="tener minds logo" />
            </NavLink>
          </FirstIconDiv>
          <IconDiv>
            <NavLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M13.333 13.333a.667.667 0 0 1-.666.667H3.333a.667.667 0 0 1-.666-.667v-6h-2L7.55 1.075a.667.667 0 0 1 .898 0l6.884 6.258h-2v6zM5 8.667a3 3 0 0 0 6 0H9.667a1.667 1.667 0 1 1-3.334 0H5z"
                />
              </svg>
              <div>Dashboard</div>
            </NavLink>
          </IconDiv>
          <IconDiv>
            <NavLink to={`/Budget`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#fff"
                  d="M1.297 6.21c-.348-.116-.351-.303.007-.423l12.725-4.241c.352-.117.554.08.456.425l-3.636 12.724c-.1.353-.304.365-.453.03L8 9.333 12 4 6.667 8l-5.37-1.79z"
                />
              </svg>
              <div>Budget</div>
            </NavLink>
          </IconDiv>
          <IconDiv>
            <NavLink to={`/Approvals`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  fill="#fff"
                  d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zm0-9.1H4.2v1.4h6.3L7 2.8v2.1zM3.5 7.7L7 11.2V9.1h2.8V7.7H3.5z"
                />
              </svg>
              <div>Approvals</div>
            </NavLink>
          </IconDiv>
        </LeftNav>

        <RightSection expand={expand}>
          <TopNav expand={expand}>
            <div onClick={onToggle} className="title">
              <img src={Home} alt="bell" />
            </div>

            <div className="controls">
              <div className="avail">
                <img src={Bell} alt="bell" />
              </div>
              <div className="name">
                <h1>Bidemi Yusuf</h1>
                <span>Executive</span>
              </div>
              <div className="avail">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="#262F56"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </TopNav>
          <div className="children-wrapper">{children}</div>
        </RightSection>
      </MainContainer>
    </div>
  );
};

export default Frame;
