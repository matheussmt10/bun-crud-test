const server = Bun.serve({
  port: 8080,
  fetch(req) {
    return new Response("Teste");
  },
});

console.info(`[INFO] Server initialized on port ${server.port}`);
