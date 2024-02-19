const presenteImg = document.querySelector(".presente");
const abertaImg = document.querySelector(".aberta");
const gatinhoImg = document.querySelector(".gatinho")
const title = document.querySelector(".title")
const balaos = document.querySelector(".balaos")


function abrir() {
  presenteImg.classList.add('disable');
  abertaImg.classList.remove('disable');
  gatinhoImg.classList.remove('disable')
  title.classList.remove('disable')
  balaos.classList.remove('disable')

  setTimeout(yt, 5000);
 
}

function yt() {
  location.href = "loading.html";
  setTimeout(letter, 5000);
}

function letter() {
  location.href = "Letter.html";
  setTimeout(yt, 5000);
}