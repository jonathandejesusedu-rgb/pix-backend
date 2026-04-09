const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor rodando");
});

app.get("/pix", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.paradisepags.com/v1/transactions",
      {
        amount: 5000,
        paymentMethod: "pix",
        customer: {
          name: "Cliente Teste",
          email: "cliente@email.com"
        }
      },
      {
        headers: {
          "X-API-Key": "sk_62969b67edd2adec815b1b87440cca0414c15fc589f60ca54aafdc82099610d9",
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    res.send("Erro ao gerar Pix");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
