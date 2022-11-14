import logo from "../img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <NavLink class="main-nav-item" to="./sign-in">
            <i class="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
