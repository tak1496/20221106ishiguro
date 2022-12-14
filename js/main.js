const target = document.getElementById("hamburger-menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});


const openBtn = document.getElementById('contact_openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "contact_openBtn") {
  modal.style.display = 'none';
  }
});

function scroll_top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/*
function scrollTop(elem) {

  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');
*/