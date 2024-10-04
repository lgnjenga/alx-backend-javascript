export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const data = {
        message: 'This is a response from the API',
      };
      resolve(data);
    }, 2000);
  });
}
