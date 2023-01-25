export default function handleResponseFromAPI(promise) {
  promise
    .then((res = 'Got a response from the API') => {
      console.log(res);
      return { status: 200, body: 'Success' };
    })
    .catch(new Error());
}
