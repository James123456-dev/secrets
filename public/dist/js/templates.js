// Single secret card tempate
function secretCard(secret) {
  const secretDiv = document.createElement("div");
  secretDiv.classList = "secret hover";
  secretDiv.innerHTML = `
  <heading>${secret.title}</heading>
    <p>${secret.body.substring(0, 100)}</p>
    <small>${secret.authorId}</small>
  `;
  return secretDiv;
}

//Show a popup with content that's passed
function showPopUp(content) {
  const popupWrapper = document.createElement("div");
  popupWrapper.classList = "popup center-wrapper";

  popupWrapper.innerHTML = `
  <div class="close-popup"><i class="material-icons">close</i></div>
  ${content}
  `;
  document.body.appendChild(popupWrapper);
}

//add new secret template
const newSecret = () => {
  return `
  <form action="/api/secrets" method="POST" class="new-secret">
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
