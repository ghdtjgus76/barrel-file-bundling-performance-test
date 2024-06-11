import { defineTokens } from "@pandacss/dev";
import { stroke as wowStroke } from "modularize-imports-tokens";

export const borderWidths = defineTokens.borderWidths({
  button: {
    value: wowStroke.button,
  },
  arrow: {
    value: wowStroke.arrow,
  },
});
