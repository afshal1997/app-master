import * as AuthPages from "../Pages/Auth";
import * as NonAuthPages from "../Pages/NonAuth";

export const nonAuthRoutes = [
  {
    path: '/', page: NonAuthPages.Home
  },
  {
    path: '/contact-us', page: NonAuthPages.ContantUs
  }
]
export const authRoutes = [
  {
    path: '/login', page: AuthPages.Login, isAuth: true
  }
]