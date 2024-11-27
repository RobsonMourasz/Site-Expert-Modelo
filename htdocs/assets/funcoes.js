(function () {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            this.document.querySelector("header").classList.add("menu-fixed");
            this.document.querySelector("header").classList.remove("w-80");
            this.document.querySelector("header").classList.add("w-100");

        } else {
            this.document.querySelector("header").classList.remove("menu-fixed");
            this.document.querySelector("header").classList.add("w-80");
            this.document.querySelector("header").classList.remove("w-100");
        }
    });


})();

function PaddingMenu(nameBotao) {

    tagLink = document.querySelectorAll('header nav .nav ul li a');
    for (let index = 0; index < tagLink.length; index++) {
        let temp = tagLink[index].hash
        temp = temp.replace("#", "")
        temp = "nav-" + temp
        document.getElementById(temp).classList.remove("active")
    }

    if (nameBotao != "home") {
        const tempNameBotao = "nav-" + nameBotao
        document.getElementById(tempNameBotao).classList.add("active")
        document.getElementById(nameBotao).classList.add("pad-top-4");
    } 
}


