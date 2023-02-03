var burgerMenuImage = document.querySelector(".image-menu");
var openBurgerMenu = 0;
var body = document.querySelector("body");
var menu = document.querySelector(".menu");
var menuOpen = document.querySelector(".open-menu");
var openCard = document.querySelectorAll(".open-card");
var cardProduct = document.querySelector(".article-card");
var exit = document.querySelector(".close");
var back = document.querySelector(".back");
var basket = document.querySelector(".basket");
var popup = document.querySelector(".pop_up");
var closePopup = document.querySelector(".close-popup");
var minus = document.querySelectorAll("#minus");
var plus = document.querySelectorAll("#plus");
var value = document.querySelectorAll(".value");
var amount = document.querySelectorAll("#amount");
var allAmount = document.querySelector("#all-amount");
var closeMenu = document.querySelector(".background-menu");
var windowSize = screenWidth = window.screen.width;

/* Появление меню*/
menu.onmouseover = function (event) {
  let target = event.target;
  menuOpen.style.display = "block";
  menu.style.boxShadow = "0 0 2px rgb(0 0 0 / 50%)";
  menuOpen.style.boxShadow = "0 0 10px rgb(0 0 0 / 50%)";
  body.classList.add("modal-open");
  if(windowSize>1023){
    closeMenu.style.display="none";
  }
  else{
    closeMenu.style.display="block";
  }
};
menuOpen.onmouseover = function (event) {
  let target = event.target;
  menuOpen.style.display = "block";
  menu.style.boxShadow = "0 0 2px rgb(0 0 0 / 50%)";
  menuOpen.style.boxShadow = "0 0 10px rgb(0 0 0 / 50%)";
  body.classList.add("modal-open");
  if(windowSize>1023){
    closeMenu.style.display="none";
  }
  else{
    closeMenu.style.display="block";
  }
};
if(windowSize>1023){
  closeMenu.style.display="none";
  menuOpen.onmouseout = function (event) {
    let target = event.target;
    menu.style.boxShadow = "0 0 10px rgb(0 0 0 / 50%)";
    menuOpen.style.boxShadow = "none";
    menuOpen.style.display = "none";
    body.classList.remove("modal-open");
  
  };
}

if(windowSize<1023){
  closeMenu.addEventListener('click', function(){
    menuOpen.style.boxShadow = "none";
    menuOpen.style.display = "none";
    body.classList.remove("modal-open");
  })
}

/*функции карточки товара */
for (let index = 0; index < openCard.length; index++) {
  openCard[index].addEventListener('click', function () {
    cardProduct.style.display = "block";
    menu.style.display = "none";
    body.classList.add("modal-open");
  });
}
exit.addEventListener('click', function () {
  cardProduct.style.display = "none";
  menu.style.display = "block";
  body.classList.remove("modal-open");

});
back.addEventListener('click', function () {
  cardProduct.style.display = "none";
  menu.style.display = "block";
  body.classList.remove("modal-open");
});
/*функции корзины */
basket.addEventListener('click', function () {
  popup.style.display = "block";
  body.classList.add("modal-open");
  menu.style.display = "none";
});
closePopup.addEventListener('click', function () {
  popup.style.display = "none";
  body.classList.remove("modal-open");
  menu.style.display = "block";
})
/* подсчет суммы и кол-ва товаров в карточке */
counting("loadprice");
for (let index = 0; index < minus.length; index++) {
  minus[index].addEventListener('click', function () {
    var num = Number(value[index].textContent);
    if (num == 1) {
      num = 0;
      value[index].textContent = String(num);
    }
    else {
      num--;
      value[index].textContent = String(num);
    }
    counting("minus", index);
  })
  plus[index].addEventListener('click', function () {
    var num = Number(value[index].textContent);
    num++;
    value[index].textContent = String(num);
    counting("sum");
  })
}

/*функция  подсчета суммы товаров в корзине */
function counting(apperation, index) {
  if (apperation == "sum") {
    sum = 0;
    for (let index = 0; index < amount.length; index++) {
      var am = Number(amount[index].textContent);
      var num = Number(value[index].textContent);
      sum += am * num;
      allAmount.textContent = String(sum);
    }
  }
  else if (apperation == "minus") {
    var sum = Number(allAmount.textContent);
    var am = Number(amount[index].textContent);
    sum -= am;
    allAmount.textContent = String(sum);
  }
  else {
    sum = 0;
    for (let index = 0; index < amount.length; index++) {
      var am = Number(amount[index].textContent);
      var num = Number(value[index].textContent);
      sum += am * num;
      allAmount.textContent = String(sum);
    }
  }
}
