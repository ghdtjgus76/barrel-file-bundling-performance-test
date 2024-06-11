import { defineTokens } from "@pandacss/dev";
import { stroke as wowStroke } from "name-space-imports-tokens";

export const borderWidths = defineTokens.borderWidths({
  button: {
    value: wowStroke.button,
  },
  arrow: {
    value: wowStroke.arrow,
  },
});
