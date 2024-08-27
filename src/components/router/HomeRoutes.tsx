import {Home} from "../pages/Home";
import {UserManegement} from "../pages/UserManagement";
import {Setting} from "../pages/Setting";
import { Page404 } from "../pages/Page404";

export const homeRoute = [
  {
  path: "/",
  exact: true,
  children: <Home />,
  },
  {
  path: "/user_manegement",
  exact: false,
  children: <UserManegement />,
  },
  {
  path: "/setting",
  exact: false,
  children: <Setting />,
  },
  {
  path: "*",
  exact: false,
  children: <Page404 />,
  },
]