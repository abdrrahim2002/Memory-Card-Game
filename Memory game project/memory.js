
const mainArray = [['Untitled.png',1],['Untitled.png',11],['Untitled1.png',2],['Untitled1.png',22],['Untitled2.png',3],['Untitled2.png',33],['Untitled3.png',4],['Untitled3.png',44],['Untitled4.png',5],['Untitled4.png',55],['Untitled5.png',6],['Untitled5.png',66],['Untitled6.png',7],['Untitled6.png',77],['Untitled7.png',8],['Untitled7.png',88]];
const card = 'images/icard_back.png';


//function to randomly the images
function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
  }

  //console.log(array);
}

//function to display the images

function creat(array) {
  let insideDiv = '';

  randomArray(array);

  for (let i = array.length-1; i>=0 ; i--){
    if (array[i][1].toString().length === 1) {
      insideDiv += `<img id = 'imgs' class="a${array[i][1]}" onclick = 'saving("a${array[i][1]}") ; changeImg("a${array[i][1]}" ,"${array[i][0]}"); resetCart()' src="images/card_back.png">`;
    }else if (array[i][1].toString().length === 2){
      insideDiv += `<img id = 'imgs' class="b${array[i][1]}" onclick='saving("b${array[i][1]}"); changeImg("b${array[i][1]}" ,"${array[i][0]}"); resetCart()' src="images/card_back.png">`;
    }
  }

  document.querySelector('.game-box').innerHTML = insideDiv;
  //console.log(insideDiv);

}

creat(mainArray);

//function to cahnge the cover of card when we click
function changeImg(x,y){
  document.querySelector(`.${x}`).src = `images/${y}`;
}

//function take 2 img and compaire id they are the same content
let x = undefined;
let y = undefined;
let correct = 0;

function saving(z){
  if(x === undefined) {
    x = document.querySelector(`.${z}`);

  }else if (y === undefined) {
    y = document.querySelector(`.${z}`);

    //use check function
    if(x && y) {
      setTimeout(()=> checking(),10)
    }
  }


}

// creat function to compair x and y

function checking() {
  if(x.getAttribute('src') === y.getAttribute('src')) {
    console.log('yes');

    //return x and y to default value
    x = undefined;
    y = undefined;
    new Audio('sound/success1.mp3').play();
    correct++;
    
    if(correct === 8) {
      setTimeout(()=>{new Audio('sound/success-final.mp3').play();},300)
    }
  }else if (x.src !== y.src) {
    console.log('no');
    new Audio('sound/wrong-answer.mp3').play();
    setTimeout(()=>{
      x.src = 'images/card_back.png';
      y.src = 'images/card_back.png';
      //return x and y to default value
      x = undefined;
      y = undefined;
    },350)
  }
}


//function return the card back if we click the same image

function resetCart(){
  if(x === y) {
    x.src = 'images/card_back.png';
    y.src = 'images/card_back.png';

    x = undefined;
    y = undefined;
  }
}


//function to restart the game if we click restart-button



function restartGame() {
  location.reload();
}

document.querySelector('.restart-button').addEventListener('click',restartGame);
