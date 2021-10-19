//Get all secrets
let limit = 10;
let page =1;

async function getSecrets() {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1`);
  const jsonData = await data.json();
  console.log(jsonData)
  return jsonData;
}
// async function getSecrets() {
//   const data = await fetch("/api/secrets/");
//   const jsonData = await data.json();
//   console.log(jsonData)
//   return jsonData;
// }


//Get full secret
// async function getSecret(secretId) {
//   const data = await fetch(`/api/secrets/${secretId}`);
//   const jsonData = await data.json();
  
//   return jsonData;
// }

// async function getSecret(secretId) {
//   const data = await fetch(`/api/secrets/${secretId}`);
//   const jsonData = await data.json();
  
//   return jsonData;
// }
