const burger = document.querySelector('.icon-burger');
const cross = document.querySelector('.icon-slack');
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
search.addEventListener('click', () => {
  searchbar.classList.add("visible");
});
document.addEventListener('click', (ev) => {
  let num = parseInt(ev.target.id.slice(1, 3)) - 1;
  for (i = 0; i < speaker.length; i++) {
    if (i !== num) {
      speaker[i].classList.remove("active");
    }
    if (i === num) {
      speaker[i].classList.add("active");
    }
  };
});
