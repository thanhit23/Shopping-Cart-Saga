import { Route, NavLink } from 'react-router-dom';

export function CustomLink({ label, to, activeWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeWhenExact}
      children={({ match }) => {
        return (
          <li className={match && 'active'}>
            <NavLink to={to} className="">
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
}
