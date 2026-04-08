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
    console.log("ERRO REAL:", error.response?.data || error.message);
    res.json({
      erro: true,
      detalhe: error.response?.data || error.message
    });
  }
});
