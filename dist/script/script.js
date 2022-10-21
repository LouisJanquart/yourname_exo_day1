const burger = document.querySelector('.icon-burger');
const cross = document.querySelector('.close');
const search = document.querySelector('.icon-loop');
const menu = document.querySelector('.menu');
const searchbar = document.querySelector('#search');
const speaker = document.querySelectorAll('.speakers_list__speaker');
burger.addEventListener('click', () => {
  menu.classList.toggle("left");
});
cross.addEventListener('click', () => {
  menu.classList.toggle("left");
});
document.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('icon-loop')) {
    searchbar.classList.add("visible");
  }
  else {
    searchbar.classList.remove("visible");
  }
  let num = parseInt(ev.target.id.slice(1, 3)) - 1;
  for (i = 0; i < speaker.length; i++) {
    if (i === num) {
      speaker[i].classList.add("active");
    }
    else {
      speaker[i].classList.remove("active");
    }
  };
});
