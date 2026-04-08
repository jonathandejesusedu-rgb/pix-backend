const express = require("express");
const axios = require("axios");

const app = express();

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

// Rota do Pix (TEMPORARIAMENTE SEM API)
app.get("/pix", (req, res) => {
  res.json({
    status: "ok",
    mensagem: "Rota funcionando"
  });
});

// Porta obrigatória do Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
