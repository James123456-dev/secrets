// =============== Add New Secrets =============//
//show add new secret pop up
function showNewSecretPopUp(func) {
  const popUpContent = func();
  showPopUp(popUpContent);
}
// Add new secret to DB
const submitNewSecret = async () => {
    const form = document.querySelector(".new-secret");
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
};
// =============== Add New Secret =============//

// =============== Show Secrets =============//

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
//show full secret pop up
async function showFullSecretPopup(e, secret) {
    //Show full secret details in pop up
    const toShow = [e.target, e.target.querySelector(".secret-card-title"),
    e.target.querySelector(".secret-card-body"),
    e.target.querySelector(".secret-card-author")]
    if (toShow.includes(e.target)) {
        const secretId = e.target.dataset.id;
        const details = secretDetailContainer();
        showPopUp(details);
        const popupWindow = document.querySelector(".secret-detail");
        showloading(popupWindow)
        const detailedSecret = await getSecret(secret._id);
        const secretCardInner = secretDetailContainer(detailedSecret.data);
        popupWindow.innerHTML = secretCardInner;
    }
}
// =============== Show Secrets =============//

// =============== Pop Up =============//
//Show a popup with content that's passed
function showPopUp(content, eListener) {
    let popupWrapper = document.querySelector(".popup.show")
    if(!popupWrapper){
        popupWrapper = document.createElement("div");
        popupWrapper.classList = "popup show center-wrapper";
    }else{
        popupWrapper.innerHTML = "";
    }
    popupWrapper.innerHTML = `
    ${popupCloseBtn()}
    ${content}
  `;
    popupWrapper.addEventListener("click", (e) => {
        const content = popupWrapper.children;
        const contains = e.target.contains(popupWrapper)
        if (contains) {
            popupWrapper.innerHTML = "";
            popupWrapper.classList.remove("show")
        }
    });
    const closeBtn = popupWrapper.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        popupWrapper.innerHTML = "";
        popupWrapper.classList.remove("show")
    });
    
    document.body.appendChild(popupWrapper);
}
// =============== Pop Up =============//