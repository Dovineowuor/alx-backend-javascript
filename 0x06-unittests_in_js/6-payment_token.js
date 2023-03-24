function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, _reject) => {
    if (success) {
      resolve({data: 'Successful response from the API'});
    }
  });
}

module.exports = getPaymentTokenFromAPI;
