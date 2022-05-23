const axios = require('axios');

// const checkBankDetails = async (accountNumber, bankCode) => {
//   console.log('accountNumber', accountNumber);
//   console.log('bankCode', bankCode);
//   return await axios
//     .get(
//       `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
//     )
//     .head({
//       Accept: 'application/json',
//       Authorization: 'Bearer ',
//     })
//     .then((result) => {
//       var responseBody = result.data;
//       console.log('responseBody', responseBody);
//       if (responseBody.accountName) {
//         console.log('this is bank response::::::', responseBody);
//         return responseBody;
//       } else {
//         return false;
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       return false;
//     });
// };

// module.exports = checkBankDetails;

const checkBankDetails = async (accountNumber) => {
  console.log('accountNumber', accountNumber);
  try {
    const res = await axios({
      method: 'GET',
      url: `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=058`,
      port: 443,
      headers: {
        Authorization:
          'Bearer sk_test_cc45b2ef0df820c273ec72ad2f2293c9cdfb3307',
      },
    });

    if (res.status == true) {
      console.log(JSON.parse(res));
    }

    return res;
  } catch (err) {
    console.log(err);
  }
};

module.exports = checkBankDetails;
