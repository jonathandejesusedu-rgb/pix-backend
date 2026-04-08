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
          name: "Cliente",
          email: "cliente@email.com"
        }
      },
      {
        headers: {
          Authorization: "sk_62969b67edd2adec815b1b87440cca0414c15fc589f60ca54aafdc82099610d9"
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.send("Erro ao gerar Pix");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Rodando"));
