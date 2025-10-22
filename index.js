const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/home", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
   // Log the correct URL (http) — using https here is misleading when the server isn't configured for TLS
   console.log(`Example app listening on http://localhost:${port}`);
});
