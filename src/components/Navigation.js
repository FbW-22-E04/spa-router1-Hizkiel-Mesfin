import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  return (
    <div className="header">
      <h1 className="nav-head">About Me</h1>
      <ul className="list">
        <NavLink className="link" activeclassname="active" end to="/me">
          <li>Me</li>
        </NavLink>
        <NavLink className="link" to="/hobbies">
          <li>Hobbies</li>
        </NavLink>
        <NavLink className="link" to="/contact">
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
