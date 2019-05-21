const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // this is where we'll make our MongoDB request
  server.get("/api", (req, res) => {
    res.json({ name: "Andre" });
  });
  // Serve all the other content as next
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Yo, I am listening on: http://localhost:${port}`);
  });
});
