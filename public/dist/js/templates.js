function secretCard(secret) {
  const secretDiv = document.createElement("div");
  secretDiv.classList.add("secret");
  secretDiv.innerHTML = `
  <heading>${secret.id}</heading>
    <p>${secret.body}</p>
    <small>${secret.author}</small>

  `;
  return secretDiv;
}
