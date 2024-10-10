import { createRoute } from "@tanstack/react-router";
import { DemoPage } from "../pages/Demo/Demo";
import { rootRoute } from "./root.routes";

export const demoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "demoPath",
  component: DemoPage,
});
