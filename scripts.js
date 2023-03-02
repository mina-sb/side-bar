let tabBtns = document.querySelectorAll(".bx");
let underline = document.querySelector(".underline");
let tabs = document.querySelectorAll(".tab-containers > div");
let container = document.querySelector(".tab-containers");

let tabWidth = underline.parentElement.offsetWidth / 3 + 1;

tabBtns.forEach(function (item, index) {
  item.addEventListener("click", function () {
    switch (index) {
      case 0:
        underline.style.transform = "translateX(" + 0 + "px)";
        tabBtns.forEach(function (i) {
          i.classList.remove("active");
        });
        item.classList.add("active");
        container.style.transform = "translateX(" + 0 + "px)";

        break;

      case 1:
        underline.style.transform = "translateX(" + tabWidth + "px)";
        tabBtns.forEach(function (i) {
          i.classList.remove("active");
        });
        item.classList.add("active");
        container.style.transform = "translateX(" + -200 + "px)";

        break;

      case 2:
        underline.style.transform = "translateX(" + index * tabWidth + "px)";
        tabBtns.forEach(function (i) {
          i.classList.remove("active");
        });
        item.classList.add("active");
        container.style.transform = "translateX(" + -400 + "px)";

        break;
    }
  });
});
