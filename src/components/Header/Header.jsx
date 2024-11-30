import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink style={{'marginRight': '30px'}} to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Header;