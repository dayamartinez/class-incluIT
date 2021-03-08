module.exports.main = (event, context, callback) => {

  const { transactions } = JSON.parse(event.body)

  if (!transactions) {
    return callback(null, {
      statusCode: 400,
      message: 'Bad Request due to missing a required parameter'
    });
  }

  let balanceARS = 0;
  let balanceUSD = 0;
  
  transactions.forEach(element => {
    const {currency, amount, status} = element
    if(status === "succeeded"){
      currency.toUpperCase() === "ARS" 
      ? balanceARS += parseFloat(amount) 
      : balanceUSD += parseFloat(amount);
    }
  })

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      balance: {
        amounts: {
          ars: balanceARS,
          usd: balanceUSD
        }
      }
    }),
  };

  callback(null, response);
};
