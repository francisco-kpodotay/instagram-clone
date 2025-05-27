import { createSystem, defaultConfig } from "@chakra-ui/react";

const config = {
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "#EDF2F7", _dark: "#000" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "#1A202C", _dark: "rgba(255, 255, 255, 0.92)" },
          },
        },
      },
    },
  },
};

export const system = createSystem(defaultConfig, config);
