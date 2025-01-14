import type { BuildConfig } from "bun";

const defaultConfig: BuildConfig = {
  entrypoints: [],
  outdir: "dist",
  minify: true,
};

const results = await Promise.all([
  Bun.build({
    ...defaultConfig,
    entrypoints: ["src/app/index.ts"],
    external: ["electron"],
  }),
  Bun.build({
    ...defaultConfig,
    entrypoints: ["src/app/preload.tsx"],
    target: "node",
  }),
]);

results.forEach((result) => {
  if (!result.success) {
    console.log(`Error: ${result.logs}`);
    process.exit(-1);
  }
});
