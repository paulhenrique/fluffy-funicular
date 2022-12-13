import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withTemplate } from "./helpers/withTemplate";
import { ROUTES } from "./ROUTES";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, component: Component, template }) => (
          <Route
            key={path}
            path={path}
            element={withTemplate(template, Component)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
