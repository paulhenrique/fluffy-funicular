import Home from "../pages/Home";
import { KeysRegister } from "../pages/KeysRegister";
import Pandas from "../pages/Pandas";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import { TemplateTypes } from "../templates";

export const routesPath = {
  home: "/",
  settings: "/settings",
  profile: "/settings/perfil",
  pandas: "/settings/pandas",
  keysRegister: "/keys-register",
};

export const ROUTES = [
  {
    path: routesPath.home,
    component: Home,
    template: TemplateTypes.default,
  },
  {
    path: routesPath.settings,
    component: Settings,
    template: TemplateTypes.settings,
  },
  {
    path: routesPath.profile,
    component: Profile,
    template: TemplateTypes.settings,
  },
  {
    path: routesPath.pandas,
    component: Pandas,
    template: TemplateTypes.settings,
  },
  {
    path: routesPath.keysRegister,
    component: KeysRegister,
    template: TemplateTypes.default,
  },
];
