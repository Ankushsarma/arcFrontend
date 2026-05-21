import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const indexFile = path.join(dist, "index.html");

if (!existsSync(indexFile)) {
  throw new Error("dist/index.html was not found. Run this after vite build.");
}

const productIds = ["zarvex", "aegis", "unimount", "arise"];

const routes = [
  "about",
  "contact",
  "engineering",
  "security",
  "privacy",
  "terms",
  "coming-soon",
  "coming-soon/arise",
  "ecosystems/zarvex",
  "ecosystems/prana",
  "ecosystems/morph",
  ...productIds.map((id) => `product/${id}`),
  ...productIds.map((id) => `product/${id}/full-details`),
  ...productIds.map((id) => `project/${id}`),
  ...productIds.map((id) => `project/${id}/full-details`),
];

for (const route of routes) {
  const routeDir = path.join(dist, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexFile, path.join(routeDir, "index.html"));
}

copyFileSync(indexFile, path.join(dist, "404.html"));

console.log(`Generated static fallback pages for ${routes.length} routes.`);
