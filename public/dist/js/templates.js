// General secret card card tempate
function secretCard(secret) {
    const secretDiv = document.createElement("div");
    secretDiv.classList = "secret hover";
    secretDiv.innerHTML = `
    <heading class="secret-card-title">${secret.title}</heading>
    <p class="secret-card-body">${secret.body.substring(0, 150)} ${secret.body.length > 150 ? `<a href="#" class="more-less"></a>` : ""}</p>
    <small class="secret-card-author">${secret.userName}</small>
  `;
  const body = secretDiv.querySelector(".secret-card-body")
    //show less
    const showLess = document.createElement("a")
    showLess.setAttribute("href", "#");
    showLess.innerText = "...Less";
    showLess.classList = "show-less-more";
    showLess.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("showshowLess")
        body.innerHTML = `${secret.body} ${showMore}`;
    });
    //show more
    const showMore = document.createElement("a")
    showMore.setAttribute("href", "#");
    showMore.innerText = "...More";
    showMore.classList = "show-less-more";
    showMore.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("showshowMore")
        body.innerHTML = `${secret.body.substring(0,150)} ${showLess}`;
    });

    

    const one = secretDiv.querySelector(".more-less")
    if(one){
         one.appendChild(showMore)
    }
   
    // one.appendChild(showMore)
    // const body = secretDiv.querySelector(".secret-card-body");
    // const showHideContent = body.querySelector("a.more-less")
    

     // Show all characters of secret
    //     if(){
            
    //         //show less link
    //         more.addEventListener("click", (e) => {
    //         e.preventDefault()
    //         body.innerHTML = `${secret.body}`;
    //         body.appendChild(less)
    //     });
    // }
    //show full secret 
    secretDiv.addEventListener("click", async function(e) {
        //Show full secret details in pop up
        const toShow = [this, this.querySelector(".secret-card-title"),
        this.querySelector(".secret-card-body"),
        this.querySelector(".secret-card-author")]
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
    });
    return secretDiv;
}

//add new secret template
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
function secretDetailContainer(secret) {
    if (!secret) {
        return `
    <div class="center-wrapper card-wrapper secret-detail">
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

function popupCloseBtn(){
    return `
    <div class="close-popup">
    <i class="material-icons close">
    close
    </i>
    </div>
    `
};