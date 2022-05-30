import * as AuthPages from "../Pages/Auth";
import * as NonAuthPages from "../Pages/NonAuth";

export const nonAuthRoutes = [
  {
    path: '/', page: NonAuthPages.Home
  },
  {
    path: '/contact-us', page: NonAuthPages.ContantUs
  },
  {
    path: '/audit', page: NonAuthPages.Audit
  },
  {
    path: '/pricing', page: NonAuthPages.Pricing
  }
]
export const authRoutes = [
  {
    path: '/login', page: AuthPages.Login, isAuth: true
  }
]