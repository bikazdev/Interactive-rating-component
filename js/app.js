const numbersArray = [1, 2, 3, 4, 5];
const numbersContainer = document.querySelector(".numbers");
const mainContainer = document.querySelector('.main')
const thankStateContainer = document.querySelector('.thankState')
const submitBtn = document.querySelector('.submitBtn')
const selectedElem = document.querySelector('.selected')
let makeNumberElem;
numbersArray.forEach(function (number) {

  makeNumberElem = document.createElement("div");
  makeNumberElem.classList.add("number");
  makeNumberElem.innerHTML = number;
  numbersContainer.append(makeNumberElem);

  makeNumberElem.addEventListener("click", function (event) {

    event.target.parentElement
      .querySelectorAll(".number")
      .forEach(function (numElement) {
        numElement.classList.remove("active");
      });
      selectedElem.innerHTML = `You selected ${event.target.innerHTML} out of 5`
    event.target.classList.add("active");
    
  });
});


submitBtn.addEventListener('click', function(){
    mainContainer.classList.add('active')
    thankStateContainer.classList.remove('active')
})