window.onload = function() {

  document.querySelector("#TitleBanner h1").classList.add("tp");
  document.querySelector("#TitleBanner h1").onclick = function() {
    this.classList.toggle("black");
  }
  document.querySelector("#Recipe_columns #ingredients").onclick = function() {
    this.classList.toggle("TPshow");
  }
  document.querySelector("#Recipe_columns #directions").onclick = function() {
    this.classList.toggle("TPshow");
  }
  document.querySelector("#Recipe_columns #equipment").onclick = function() {
    this.classList.toggle("TPshow");
  }
  document.querySelector("#Recipe_columns #equipment ul").innerHTML += "<li>Room For Dessert</li>"; //Inner HTML requirement
}