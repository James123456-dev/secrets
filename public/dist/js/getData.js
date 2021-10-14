//Get all secrets
async function getSecrets() {
  const data = await fetch("/api/secrets/");
  const jsonData = await data.json();
  console.log(jsonData)
  return jsonData;
}
//Get full secret
async function getSecret(secretId) {
  const data = await fetch(`/api/secrets/${secretId}`);
  const jsonData = await data.json();
  
  return jsonData;
}
