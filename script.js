function dropDown() {
  document.getElementById("drop-menu").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches(".drop-btn")) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

AOS.init({
  easing: "ease-out-back",
  duration: 800,
  delay: 300,
  once: true,
  disable: "mobile"
});

var config = {
  type: "carousel",
  perView: 3,
  focusAt: 1,
  gap: 10
};
new Glide(".glide", config).mount();
var rellax = new Rellax(".rellax");
