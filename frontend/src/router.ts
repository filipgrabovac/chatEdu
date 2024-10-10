import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/root.routes";

const routeTree = rootRoute.addChildren({});

export const router = createRouter({ routeTree });
