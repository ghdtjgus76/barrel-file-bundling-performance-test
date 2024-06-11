import { defineTokens } from "@pandacss/dev";
import { stroke as wowStroke } from "multiple-entry-imports-tokens";

export const borderWidths = defineTokens.borderWidths({
  button: {
    value: wowStroke.button,
  },
  arrow: {
    value: wowStroke.arrow,
  },
});
