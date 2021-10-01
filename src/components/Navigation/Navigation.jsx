import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

function Navigation() {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        DASHBOARD
      </NavLink>
      <NavLink
        exact
        to="/instances"
        className={s.link}
        activeClassName={s.activeLink}
      >
        INSTANCES
      </NavLink>
      <NavLink
        to="/pairs"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        PAIRS
      </NavLink>
      <NavLink
        to="/about"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/help"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        HELP
      </NavLink>
      <NavLink
        to="/contact"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        CONTACT
      </NavLink>
      {/* {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      )} */}
    </nav>
  );
}

export default Navigation;
