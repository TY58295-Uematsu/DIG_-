import {memo, FC} from "react"
import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { homeRoute } from "./HomeRoutes";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";
import { LoginUserProvider } from "../../providers/LoginUserprovider";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
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
      </LoginUserProvider>
           <Route path="*">
              <Page404 />
           </Route>
    </Switch>

  )
});