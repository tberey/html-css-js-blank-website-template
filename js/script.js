window.addEventListener('DOMContentLoaded', async () => {
    if (window.innerWidth < 700) {
        document.getElementById("aside-show").style.display = "block";
        document.getElementById("aside").style.display = "none";
    }
});

function menu() {
    var e = document.getElementById("main-menu");
    if (e.style.height == '0px' || e.style.height == '') {
        e.style.height = '100%';
    } else {
        e.style.height = '0px';
    }
}

function sideMenu() {
    var e = document.getElementById("aside");
    var e2 = document.getElementById("aside-show");
    if (e.style.display === "none") {
        e.style.display = "block";
        e2.style.display = "none";
    } else {
        e.style.display = "none";
        e2.style.display = "block";
    }
}