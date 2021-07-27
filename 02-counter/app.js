// set initial count
let count = 0;

const decrease = document.querySelector(".decrease");
const reset = document.querySelector('.reset');
const increase = document.querySelector(".increase");

let val = document.getElementById('value');


decrease.addEventListener("click", function (){
count -= 1;
val.textContent = count;
colorPicker(count);
});


reset.addEventListener("click", function (){
  val.innerHTML = 0;
  colorPicker(count);
});



increase.addEventListener("click", function (){
count += 1;
val.textContent = count;
colorPicker(count);
});


function colorPicker(counter){
  if (counter > 0){
    val.style.color = 'green';
  }

   if (counter < 0){
    val.style.color = 'red';
  }

   if (counter === 0){
    val.style.color = '#222';
  }

}
