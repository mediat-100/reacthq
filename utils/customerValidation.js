const axios = require('axios');
const paystackSecretKey = process.env.paystackSecretKey

const checkBankDetails = async (accountNumber, bankCode) => {
  console.log(accountNumber)
  return await axios({
    method: 'GET',
    url: `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
    port: 443,
    headers: {
      Authorization: `Bearer ${paystackSecretKey}`,
    },
  })
    .then((result) => {
      let responseBody = result.data;
      if (responseBody.accountName) {
        console.log('this is bank response::', responseBody);
        return responseBody;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};

module.exports = checkBankDetails;
