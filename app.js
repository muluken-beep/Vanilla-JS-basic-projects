

const decrease = document.querySelector(".decrease");
const reset = document.querySelector('.reset');
const increase = document.querySelector(".increase");


decrease.addEventListener("click", function (){
let val = document.getElementById('value');
val.innerHTML -= 1;
val.style.color = 'red';
});


reset.addEventListener("click", function (){
  let val =document.getElementById('value');
  val.innerHTML = 0;
  val.style.color = 'black';
})



increase.addEventListener("click", function (){
let val = document.getElementById('value');
val.innerHTML += 1;
// let valInt = Number(val.innerHTML);
// valInt += 1
val.style.color = 'green';
});
