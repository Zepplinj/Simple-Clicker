let x = 0
let clps = 0
let levelUpCost = 10

var audio = new Audio('bgmusic.mp3');
audio.play();


document.getElementById("counter").innerHTML = x
document.getElementById("clicks").innerHTML = clps
document.getElementById("clickCost").innerHTML = levelUpCost



document.getElementById('btn').addEventListener("click", iterate)

document.getElementById('lv1').addEventListener("click", levelup)



setInterval(oneSecondFunction, 1000);
setInterval(update, 1);

function play_single_sound() {
		document.getElementById('audiotag1').play();
	}


function iterate(){
  x+=1
  console.log(x)
  document.getElementById("counter").innerHTML=x
}

function levelup(){
  if (x>=levelUpCost){
    x-=levelUpCost
    clps+=1
    levelUpCost+=10
    document.getElementById("clickCost").innerHTML = levelUpCost
    document.getElementById("clicks").innerHTML = clps
  }

}
function oneSecondFunction() {
  x+=clps
  document.getElementById("counter").innerHTML=x
}
function update(){
  document.getElementById("clickCost").innerHTML = levelUpCost
  document.getElementById("clicks").innerHTML = clps
  document.getElementById("counter").innerHTML=x
}
