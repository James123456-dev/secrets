const secretsContainer = document.getElementById("secrets-container");
const fab = document.querySelector(".fixed-action-btn");
const secretForm = document.querySelector(".new-secret");

window.addEventListener("DOMContentLoaded", async (event) => {
  //fetch all secrets if on homepage
  if (secretsContainer) {
    showSecrets(secretsContainer);
  }
});

//Show add new secret on click (FAB)
fab.addEventListener("click", () => {
  const content = newSecret();
  showPopUp(content);
});
