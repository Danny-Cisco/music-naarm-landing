// Simple build that copies HTML/assets and compiles Tailwind CSS
const { execSync } = require("node:child_process");
const { mkdirSync, cpSync, rmSync } = require("node:fs");

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/assets", { recursive: true });

execSync(
  "npx tailwindcss -i ./src/styles.css -o ./dist/assets/styles.css --minify",
  { stdio: "inherit" }
);
cpSync("src/index.html", "dist/index.html");
cpSync("src/assets", "dist/assets", { recursive: true });
console.log("✅ Built to ./dist");
