import { defineTokens } from "@pandacss/dev";
import { radius } from "name-space-imports-tokens";

export const radii = defineTokens.radii({
  sm: { value: radius.sm },
  md: { value: radius.md },
  full: { value: radius.full },
});
