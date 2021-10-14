function secretCard(secret) {
  const secretDiv = document.createElement("div");
  secretDiv.classList = "secret hover";
  secretDiv.innerHTML = `
  <heading>${secret.id}</heading>
    <p>${secret.body}</p>
    <small>${secret.author}</small>
  `;
  return secretDiv;
}
