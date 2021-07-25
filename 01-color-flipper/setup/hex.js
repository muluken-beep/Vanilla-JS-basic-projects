const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B",
"C", "D", "E", "F"];

// const btn = document.querySelector("#btn");
// const color = document.querySelector(".color");


// btn.addEventListener('click', function () {
//   const randomColor ="#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
//   document.body.style.backgroundColor = randomColor;
//   color.textContent = randomColor;
// });



const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click', function(){
let hexColor = '#';

for(let i =0; i< 6; i++){
  let randomNumber = getRandomNumber();
  let randomColor = hex[randomNumber];
  hexColor = hexColor.concat(randomColor);
}

document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
});



function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}
