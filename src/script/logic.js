//Начало
let buttonStart = document.querySelector("#BtnS");
let inputIn = document.querySelector("#InpIn");
let outNumber = document.querySelector(".Out");
let buttonClear = document.querySelector("#Clear")

//Не реагировать на пробел в начале

function ctrlButton() {
    BtnS.disabled = this.value.trim().length === 0;
  }
  
  InpIn.addEventListener('input', ctrlButton, false);
  ctrlButton.call(InpIn);

// Ввод только чисел+пробелы!

function lock(event){return event.charCode == 8 || event.charCode == 0 || event.charCode == 13 || event.charCode == 32 ? null : event.charCode >= 48 && event.charCode <= 57};

//Ввывод значения

buttonStart.onclick = function() {

    let enter = inputIn.value.split(" ");
   
    let result = enter[Math.floor(Math.random()*enter.length)];
    
    let clr = result;
    if (clr === "") {
        return buttonStart.onclick();
    }
    
    else{
        
        // console.log(clr.split(" ")); //выводит результат в концоль в виде массива
        outNumber.innerHTML = clr
    }

};

//кнопка очистки
    buttonClear.onclick = function(){
    inputIn.value = ''; //очистка поля ввода
    outNumber.innerHTML = '';
// console.clear(); очистка консоли
    
    inputIn.focus(); //фокусировка на поле ввода после нажатия кнопки
    BtnS.disabled = this.value.trim().length === 0;

};

