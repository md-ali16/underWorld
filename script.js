// basic javascript for mobile navigation
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

//basic javascript for tstimonial
let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");

function showReview() {
    for (const userPic of userPics) {
        userPic.classList.remove("active-pic");
        console.log('habijani')
    }
    for (const userText of userTexts) {
        userText.classList.remove("active-text");
    }

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

/* Optional Javascript to close the radio button version by clicking it again */
var myRadios = document.getElementsByName('tabs2');
var setCheck;
var x = 0;
for (x = 0; x < myRadios.length; x++) {
    myRadios[x].onclick = function () {
        if (setCheck != this) {
            setCheck = this;
        } else {
            this.checked = false;
            setCheck = null;
        }
    };
}
