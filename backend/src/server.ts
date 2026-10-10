import express from "express";

const app = express();
const port = 3000;

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.listen(port, () => {
  console.log(`Fynancce API running at http://localhost:${port}`);
});