Promise.all([
  Bun.build({
    entrypoints: ["src/app/index.ts"],
    outdir: "dist",
    external: ["electron"],
    minify: true,
  }),
  Bun.build({
    entrypoints: ["src/app/preload.tsx"],
    outdir: "dist",
    minify: true,
    target: "node",
  }),
]);
