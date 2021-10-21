// //Get all secrets
// let limit = 10;
// let page =1;

// Get all secrets
async function getSecrets() {
  const res = await fetch("/api/secrets", {});
  const jsonData = await res.json();
  return jsonData;
}

// Get full secret
async function getSecret(secretId) {
  const data = await fetch(`/api/secrets/${secretId}`);
  const jsonData = await data.json();
  return jsonData;
}

//add new secret
const postNewSecret = async () => {
  const rawResponse = await fetch("/api/secrets", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const data = await rawResponse.json();
  return data;
};
