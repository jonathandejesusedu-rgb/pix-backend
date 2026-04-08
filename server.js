app.get("/pix", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.paradisepags.com/v1/transactions",
      {
        amount: 50.00,
        payment_method: "pix",
        customer: {
          name: "Cliente Teste",
          email: "cliente@email.com",
          document: "12345678900"
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
    console.log(error.response?.data || error.message);
    res.send("Erro ao gerar Pix");
  }
});
