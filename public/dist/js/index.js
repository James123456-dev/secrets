
window.addEventListener('DOMContentLoaded', async (event) => {
    //    const req =await fetch('https://secrets.jameswematu.repl.co/secrets/api')
    //    const data = await req.json();
    // creatUser();
});

function creatUser() {
    //creat new use obj
    let newUser = {};
    const registerPage = document.querySelector(".register");
    if (registerPage) {
        const form = registerPage.querySelector("form");
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            for (let i = 0; i < form.children.length; i++) {
                if (form.children[i].name) { newUser = { ...newUser, [form.children[i].name]: form.children[i].value } }
            }
        });
    }
    //post new user to db
    
    
}


// window.location.replace("http://stackoverflow.com");


