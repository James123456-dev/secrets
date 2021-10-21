// Concise secret card card tempate
function secretCard(secret) {
    const secretDiv = document.createElement("div");
  
    secretDiv.classList = "secret animate__animated animate__bounceInUp";
    secretDiv.innerHTML = `
    <heading class="secret-card-title">${secret.title}</heading>
    <p class="secret-card-body">${secret.body.substring(0, 150)} ${secret.body.length > 150 ? `<a href="#" class="more-less"></a>` : ""}</p>
    <small class="secret-card-author">${secret.authorId}</small>
  `;
    //show full secret popUp
    secretDiv.addEventListener("click", function (e) {
        showFullSecretPopup(e, secret)
    });
    return secretDiv;
}

//add new secret form
const newSecret = () => {
    return `
  <form action="/api/secrets" method="POST" class="card-wrapper new-secret">
  <h5> <i class="material-icon"><i></h5>
        <div class="row">
          <div class="input-field col s12">
            <input id="authorId" name="authorId" type="text" data-length="10">
            <label for="authorId">authorId</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input  id="title" type="text" name="title" data-length="10">
            <label for="title">Title</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="body" name="body" class="materialize-textarea" data-length="120"></textarea>
            <label for="body">Body</label>
          </div>
        </div>
  <button type="submit" class="button btn-medium"> Add New Secret</button>
  </form>
  `;
};

//Secret Detail pop up card
function secretDetailContainer(secret) {
    if (!secret) {
        return `
    <div class="center-wrapper card-wrapper secret-detail"></div>
    `
    } else {
        return `
    <p> ${secret.title.substring(0, 10)} </p>
    <p> ${secret.body.substring(0, 10)} </p>
    <p> ${secret.authorId.substring(0, 10)} </p>
    <p> ${secret.createdAt} </p>
    `
    }
}
// Close btn for pop up
function popupCloseBtn(){
    return `
    <div class="close-popup">
    <i class="material-icons close">
    close
    </i>
    </div>
    `
};

//show/hide loading animation/loader/spinner
function showloading(el) {
        el.innerHTML = `<div class="loader center-wrapper"> 
        <div class="dot"> </div>
        <div class="dot"></div>
        <div class="dot"></div>
        </div>`;
}
function hideloading(el) {
  el.innerHTML = "";
}