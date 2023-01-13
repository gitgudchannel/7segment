import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

import { config } from "./config";

export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  styles: {
    global: (props: Record<string, any> | StyleFunctionProps) => ({
      body: {
        bg: mode("#99ffdf", "#121412"),
        bgGradient: mode(
          `radial-gradient(at 82% 52%, hsla(84,64%,79%,1) 0px, transparent 50%), radial-gradient(at 86% 15%, hsla(235,77%,67%,1) 0px, transparent 50%), radial-gradient(at 37% 62%, hsla(269,67%,78%,1) 0px, transparent 50%), radial-gradient(at 41% 38%, hsla(29,88%,76%,1) 0px, transparent 50%), radial-gradient(at 84% 90%, hsla(141,97%,71%,1) 0px, transparent 50%), radial-gradient(at 58% 80%, hsla(140,70%,77%,1) 0px, transparent 50%), radial-gradient(at 96% 99%, hsla(100,65%,67%,1) 0px, transparent 50%)`,
          `radial-gradient(at 82% 50%, hsla(310,20%,17%,0.13) 0px, transparent 50%), radial-gradient(at 86% 15%, hsla(172,90%,13%,1) 0px, transparent 50%), radial-gradient(at 37% 62%, hsla(203,96%,18%,1) 0px, transparent 50%), radial-gradient(at 33% 32%, hsla(321,96%,12%,1) 0px, transparent 50%), radial-gradient(at 85% 86%, hsla(180,87%,20%,1) 0px, transparent 50%), radial-gradient(at 58% 80%, hsla(72,98%,31%,1) 0px, transparent 50%), radial-gradient(at 96% 99%, hsla(37,100%,53%,1) 0px, transparent 50%)`
        )(props),
      },
    }),
  },
  config,
});
