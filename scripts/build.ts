Promise.all([
  Bun.build({
    entrypoints: ["src/index.ts"],
    outdir: "dist",
    external: ["electron"],
    minify: false,
  }),
  Bun.build({
    entrypoints: ["src/preload.ts"],
    outdir: "dist",
    minify: true,
  }),
]);
