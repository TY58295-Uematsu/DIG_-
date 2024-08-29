import { useContext } from "react"
import { LoginUserContext, LoginUserContextType } from "../providers/LoginUserprovider"

export const useLoginUser = ():LoginUserContextType => {
  return useContext(LoginUserContext);
}