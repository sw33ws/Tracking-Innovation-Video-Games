let listController = document.getElementById("navList");

let hamburgerContoller = document.getElementById("hamburgerMenu");
// the three bars that make up the hamburger menu
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");

function hamburgerMenu() {
    listController.classList.toggle('active');

    bar1.classList.toggle('active1');
    bar2.classList.toggle('active2');
    bar3.classList.toggle('active3');
}