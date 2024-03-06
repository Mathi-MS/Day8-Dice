var dicevalue = document.getElementById("dicevalue")
var rolldice = document.getElementById("rolldice")
var para = document.getElementById("para")
var addimg = document.getElementById("addimg")


rolldice.onclick = function () {
  let value = []
  let img = []
  if(dicevalue.value < 0 || dicevalue.value >6 || dicevalue.value == ""){
    para.textContent = "Enter one to six" 
  }
  else{
      for (let index = 0; index < dicevalue.value; index++) {
        let roll = Math.ceil(Math.random()*6)
        value.push(roll)
        img.push(`<img src="images/Dice0${roll}.png" alt="dice">`)
    }
    para.textContent = `Dice : ${value}`
    addimg.innerHTML = img
  }
}
