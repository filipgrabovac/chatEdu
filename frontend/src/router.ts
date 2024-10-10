import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/root.routes";
import { demoRoute } from "./routes/demo.routes";

const routeTree = rootRoute.addChildren({ demoRoute });

export const router = createRouter({ routeTree });
