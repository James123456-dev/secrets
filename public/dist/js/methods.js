//show add new secret pop up
function showNewSecretPopUp(func) {
  const popUpContent = func();
  showPopUp(popUpContent);
}
// Add new secret to DB
const submitNewSecret = async () => {
  const form = document.querySelector(".new-secret");
  if (form) {
    const reqBody = {};
    const inputs = form.querySelectorAll("input");
    const textAreas = form.querySelectorAll("textarea");
    const fields = [inputs, textAreas];
    fields.forEach((fieldArray) => {
      for (let i = 0; i < fieldArray.length; i++) {
        reqBody[fieldArray[i].name] = fieldArray[i].value;
      }
    });
    const res = await postNewSecret(reqBody);
    console.log(res);
  }
};

//loop through secrets and display
async function showSecrets(root) {
  if (root) {
    showloading(root);
    const secrets = await getSecrets();
    hideloading(root);
    if (!secrets.data || secrets.data.length === 0) {
      root.innerHTML = `<p className="info info-big"> 
                        <h5> Oops!! No secrets </h5> 
                        </p>`;
    } else {
      secrets.data.forEach((secret) => {
        const secCard = secretCard(secret);
        root.appendChild(secCard);
      });
    }
  }
}
//show/hide loading animation/loader/spinner
function showloading(el) {
  el.innerHTML = `loading....`;
}
function hideloading(el) {
  el.innerHTML = "";
}
