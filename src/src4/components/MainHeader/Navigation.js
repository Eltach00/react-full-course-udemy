import { useContext } from "react";

import styles from "./Navigation.module.css";
import AuthContext from "../../context/auth-ctx";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <ul>
        {ctx.isloggedIn && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {ctx.isloggedIn && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {ctx.isloggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
