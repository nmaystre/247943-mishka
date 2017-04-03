/* navigation */

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

console.log(navToggle);
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  console.log(navToggle);

  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


/* modal */

var linkModal = document.querySelector(".makeorder");
var popupModal = document.querySelector(".modal");
var popupBackground = document.querySelector(".modal-background");

linkModal.addEventListener("click", function(event) {
  event.preventDefault();
  popupModal.classList.remove("visually-hidden");
  popupBackground.classList.remove("visually-hidden");
});

popupBackground.addEventListener("click", function() {
  popupModal.classList.add("visually-hidden");
  popupBackground.classList.add("visually-hidden");
});

/* map */

var mapPic = document.querySelector('.contacts__picture');

mapPic.classList.add('visually-hidden');
