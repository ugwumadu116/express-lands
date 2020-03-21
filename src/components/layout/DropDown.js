import React from "react";
import { Link } from "react-router-dom";
import { DropDownContainer } from "./elements";

const App = ({ username }) => {
  return (
    <DropDownContainer>
      <div className="polygon">
        <img
          src="https://res.cloudinary.com/tener-minds/image/upload/v1581492840/Polygon_okbw6k.png"
          alt="drop down"
        />
      </div>
      <div className="drop-down-content">
        <div className="dropdown-row bottom">
          <Link to={`/${username}/profile`}>
            <img
              className="profile"
              src="https://res.cloudinary.com/tener-minds/image/upload/v1581492840/profile_ypc6md.png"
              alt="Manage profile"
            />
            <span>Manage profile</span>
          </Link>
        </div>
        <div className="dropdown-row bottom">
          <Link to={`/${username}/management`}>
            <img
              className="management"
              src="https://res.cloudinary.com/tener-minds/image/upload/v1581492840/profile_ypc6md.png"
              alt="User management"
            />
            <span>User management</span>
          </Link>
        </div>
        <div className="dropdown-row">
          <Link to="/logout">
            <img
              src="https://res.cloudinary.com/tener-minds/image/upload/v1581492840/logout_pqfs1g.png"
              alt="logout"
            />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </DropDownContainer>
  );
};

export default App;
