const secretsContainer = document.getElementById("secrets-container");
const fab = document.querySelector(".fixed-action-btn");
const newSecretPopUp = document.querySelector(".new-secret");
const newSecretForm = newSecretPopUp.querySelector(".new-secret form");
    
window.addEventListener("DOMContentLoaded", async (event) => {
    
  //fetch all secrets if on homepage
  if(secretsContainer){
      showSecrets(secretsContainer);
  }
  showPopUP(fab,newSecretPopUp, "show");

  newSecretForm.addEventListener("submit", async (e) => {
        e.preventDefault();
      const response =  await addNewSecret(newSecretForm);
        if(!response.error){
            console.log(response)
            window.location.replace("/")
        }else {
            console.log(error)
        }
  });
});



const addNewSecret = async (root) => {
    const reqBody = {};
    const inputs = root.querySelectorAll("input")
    const textAreas = root.querySelectorAll("textarea")

    const fields = [inputs, textAreas]
    fields.forEach((fieldArray => {
    for(let i = 0; i < fieldArray.length; i++){
        reqBody[fieldArray[i].name] = fieldArray[i].value
    }
    }));
   const res = await createNewSecret(reqBody)
    return res
}


const showPopUP = (el, toShow, classToAdd) => {
    el.addEventListener("click", () => {
        console.log("hello")
        console.log(toShow)
        console.log(classToAdd)
        toShow.classList.add(classToAdd)
     });
}