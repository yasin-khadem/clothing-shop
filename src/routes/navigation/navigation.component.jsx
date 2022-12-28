import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as GrenadeIcon } from "../../assets/grenade.svg";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <GrenadeIcon className="icon" />
        </Link>
        <div className="links-container">
          <Link className="nav-links-container" to="/shop">
            shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
