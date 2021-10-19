
async function showSecrets(root) {
  if (root) {
    showloading(root);
    const secrets = await getSecrets();
    hideloading(root);

    secrets.forEach((secret) => {
      const secCard = secretCard(secret);
      root.appendChild(secCard);
    });
  }
}
// async function showSecrets(root) {
//   if (root) {
//     showloading(root);
//     const secrets = await getSecrets();
//     hideloading(root);
//     secrets.data.forEach((secret) => {
//       const secCard = secretCard(secret);
//       root.appendChild(secCard);
//     });
//   }
// }
//show/hide loading animation/loader/spinner
function showloading(el) {
  el.innerHTML = `loading....`;
}
function hideloading(el) {
  el.innerHTML = "";
}
