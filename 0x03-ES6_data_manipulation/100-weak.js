export const weakMap = new WeakMap();
let a = 0;
const endpoint = { protocol: 'http', name: 'getUsers' };

weakMap.set(endpoint, a);

export function queryAPI(endpoint) {
    a = a + 1;
  try {
    if ( a >= 5) {
      throw new Error("Endpoint load is high");
     }
     weakMap.set(endpoint, a);
    }
    catch(err) {
     console.error(err.name + ':' + err.message);
    }
}

