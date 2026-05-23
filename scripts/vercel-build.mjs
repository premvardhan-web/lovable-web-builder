import { cp, mkdir, writeFile, rm, readFile } from "node:fs/promises";
import { execSync } from "node:child_process";

// 1. Build the app for Vercel (no Cloudflare plugin)
console.log("Building for Vercel...");
execSync("npx vite build --config vite.vercel.config.ts", { stdio: "inherit" });

// 2. Clean and create Vercel output directory structure
console.log("Preparing Vercel output...");
await rm(".vercel/output", { recursive: true, force: true });
await mkdir(".vercel/output/static", { recursive: true });
await mkdir(".vercel/output/functions/index.func", { recursive: true });

// 3. Copy client assets to static output
await cp("dist/client/", ".vercel/output/static/", { recursive: true });

// 4. Copy server bundle into the function directory
await cp("dist/server/", ".vercel/output/functions/index.func/", { recursive: true });

// 5. Copy the handler template
const handlerTemplate = await readFile("scripts/templates/vercel-handler.mjs", "utf-8");
await writeFile(".vercel/output/functions/index.func/index.mjs", handlerTemplate);

// 6. Create function config (Node.js 18)
await writeFile(
  ".vercel/output/functions/index.func/.vc-config.json",
  JSON.stringify({
    runtime: "nodejs18.x",
    handler: "index.mjs",
  }, null, 2)
);

// 7. Create routing config
await writeFile(
  ".vercel/output/config.json",
  JSON.stringify({
    version: 3,
    routes: [
      { handle: "filesystem" },
      { src: "/(.*)", dest: "/index" },
    ],
  }, null, 2)
);

console.log("Vercel output ready in .vercel/output/");
