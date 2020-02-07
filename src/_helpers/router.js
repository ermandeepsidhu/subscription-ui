import Vue from "vue";
import Router from "vue-router";

import { authenticationService } from "../_services/authentication.service";
import { Role } from "./role";
import HomePage from "../components/HomePage";
import LoginPage from "../components/auth/Login";
import RegisterPage from "../components/auth/Register";
import WizardPage from "../components/wizard/WizardPage";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/auth/signup",
      component: RegisterPage
    },
    {
      path: "/account/create",
      component: WizardPage
    },
    {
      path: "/dashboard",
      component: RegisterPage,
      meta: { authorize: [Role.Admin] }
    },
    {
      path: "/auth/login",
      component: LoginPage
    },

    // otherwise redirect to home
    { path: "*", redirect: "/auth/login" }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = authenticationService.currentUserValue;

  if (authorize) {
    if (!currentUser) {
      // not logged in so redirect to login page with the return url
      return next({ path: "/login", query: { returnUrl: to.path } });
    }

    // check if route is restricted by role
    if (authorize.length && !authorize.includes(currentUser.role)) {
      // role not authorised so redirect to home page
      return next({ path: "/" });
    }
  }

  next();
});
