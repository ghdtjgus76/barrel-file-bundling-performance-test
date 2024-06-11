import fs from "fs";
import path from "path";

const exportTemplate = (num: number) => `
export type { TextField${num}Props } from "./TextField${num}";
export { default as TextField${num} } from "./TextField${num}";
`;

let exportsString = "";
for (let i = 1; i <= 50; i++) {
  exportsString += exportTemplate(i);
}

const filePath = path.join("./src/components", "index.ts");
fs.writeFileSync(filePath, exportsString, "utf8");
console.log(`Created ${filePath}`);
