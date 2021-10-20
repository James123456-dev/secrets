
function secretCard(secret) {
  const secretDiv = document.createElement("div");
  secretDiv.classList = "secret hover";
  secretDiv.innerHTML = `
  <heading>${secret.title}</heading>
    <p>${secret.body}</p>
    <small>${secret.authorId}</small>
  `;
  return secretDiv;
}
