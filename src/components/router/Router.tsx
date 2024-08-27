import {memo, FC} from "react"
import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { homeRoute } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/Home" render={({match: {url}}) => (
        <Switch>
        {homeRoute.map((route)=>(
          <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
            <HeaderLayout>{route.children}</HeaderLayout>
          </Route>
          ))}
        </Switch>
          )}
           />
           <Route path="*">
              <Page404 />
           </Route>
    </Switch>

  )
});