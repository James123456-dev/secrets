
async function showSecrets(root) {
  if (root) {
    showloading(root);
    
    const secrets = await getSecrets();
    hideloading(root);
    if(!secrets.data || secrets.data.length === 0) {
       root.innerHTML = `<p className="info info-big"> 
                        <h5> Oops!! No secrets </h5> 
                        </p>` 
    }else{
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
