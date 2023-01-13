import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import SevenSegmentDisplay from "lib/components/SevenSegmentDisplay";
import { Input } from "@chakra-ui/react";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dig",
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
