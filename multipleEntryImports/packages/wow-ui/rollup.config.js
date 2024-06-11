import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import url from "@rollup/plugin-url";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import { fileURLToPath } from "url";
import preserveDirectives from "rollup-plugin-preserve-directives";

const extensions = [".tsx", ".ts", ".js", ".jsx"];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.BABEL_ENV = "production";

export default {
  input: {
    TextField1: "./src/components/TextField1",
    TextField10: "./src/components/TextField10",
    TextField11: "./src/components/TextField11",
    TextField12: "./src/components/TextField12",
    TextField13: "./src/components/TextField13",
    TextField14: "./src/components/TextField14",
    TextField15: "./src/components/TextField15",
    TextField16: "./src/components/TextField16",
    TextField17: "./src/components/TextField17",
    TextField18: "./src/components/TextField18",
    TextField19: "./src/components/TextField19",
    TextField2: "./src/components/TextField2",
    TextField20: "./src/components/TextField20",
    TextField21: "./src/components/TextField21",
    TextField22: "./src/components/TextField22",
    TextField23: "./src/components/TextField23",
    TextField24: "./src/components/TextField24",
    TextField25: "./src/components/TextField25",
    TextField26: "./src/components/TextField26",
    TextField27: "./src/components/TextField27",
    TextField28: "./src/components/TextField28",
    TextField29: "./src/components/TextField29",
    TextField3: "./src/components/TextField3",
    TextField30: "./src/components/TextField30",
    TextField31: "./src/components/TextField31",
    TextField32: "./src/components/TextField32",
    TextField33: "./src/components/TextField33",
    TextField34: "./src/components/TextField34",
    TextField35: "./src/components/TextField35",
    TextField36: "./src/components/TextField36",
    TextField37: "./src/components/TextField37",
    TextField38: "./src/components/TextField38",
    TextField39: "./src/components/TextField39",
    TextField4: "./src/components/TextField4",
    TextField40: "./src/components/TextField40",
    TextField41: "./src/components/TextField41",
    TextField42: "./src/components/TextField42",
    TextField43: "./src/components/TextField43",
    TextField44: "./src/components/TextField44",
    TextField45: "./src/components/TextField45",
    TextField46: "./src/components/TextField46",
    TextField47: "./src/components/TextField47",
    TextField48: "./src/components/TextField48",
    TextField49: "./src/components/TextField49",
    TextField5: "./src/components/TextField5",
    TextField50: "./src/components/TextField50",
    TextField6: "./src/components/TextField6",
    TextField7: "./src/components/TextField7",
    TextField8: "./src/components/TextField8",
    TextField9: "./src/components/TextField9",
  },
  output: [
    {
      format: "esm",
      dir: "dist",
      entryFileNames: "[name].js",
    },
    {
      format: "cjs",
      dir: "dist",
      entryFileNames: "[name].cjs",
    },
  ],
  external: ["react/jsx-runtime", /@babel\/runtime/],
  plugins: [
    alias({
      entries: [
        { find: "@", replacement: path.join(__dirname, "./src") },
        {
          find: "@styled-system",
          replacement: path.join(__dirname, "./styled-system"),
        },
      ],
    }),
    peerDepsExternal(),
    typescript({
      include: ["src/components/**/*"],
      exclude: [
        "**/*.stories.ts",
        "**/*.stories.tsx",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    }),
    resolve({ extensions }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      extensions,
      include: ["src/**/*"],
      babelHelpers: "runtime",
    }),
    url(),
    terser(),
    json(),
    preserveDirectives.default(),
  ],
  onwarn: (warning) => {
    if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
      return;
    }
  },
};
