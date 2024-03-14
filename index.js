// Задание 1
let button1 = document.createElement("button");
button1.textContent = "Привет";
let text1 = document.createElement("h2");
text1.textContent = "Задание 1";
let printHi = () => alert("Привет");
button1.addEventListener("click", printHi);
let task1 = document.getElementById("task1");
task1.append( text1, button1);


// Задание 2
let button2 = document.createElement("button");
button2.textContent = "Заполнить";
let text2 = document.createElement("h2");
text2.textContent = "Задание 2";
let input1 = document.createElement("input");
let fillInput = () => input1.value = "test@email.ru";
button2.addEventListener("click", fillInput);
let task2 = document.getElementById("task2");
task2.append(text2, input1, button2);


// Задание 3
let text3 = document.createElement("h2");
text3.textContent = "Задание 3";
let input2 = document.createElement("input");
let button3 = document.createElement("button");
button3.textContent = "Вывести";

let printInput = () => {
    if (input2.value.trim() !== "") {
        alert(`Вы ввели ${input2.value}`);
    }
    else {
        alert("Вы ничего не ввели в поле.");
    }
}

button3.addEventListener("click", printInput);
let task3 = document.getElementById("task3");
task3.append(text3, input2, button3);


// Задание 4
let text4 = document.createElement("h2");
text4.textContent = "Задание 4";
let input3_1 = document.createElement("input");
let input3_2 = document.createElement("input");
let button4 = document.createElement("button");
button4.textContent = "Поменять";
let reverseText = () => {
    let value1 = input3_1.value; 
    let value2 = input3_2.value;
    input3_1.value = value2;
    input3_2.value = value1;
}
button4.addEventListener("click", reverseText);
let task4 = document.getElementById("task4");
task4.append(text4, input3_1, input3_2, button4);


// Задание 5
let text5 = document.createElement("h2");
text5.textContent = "Задание 5";
let input4 = document.createElement("input");
input4.setAttribute("id", "disabl");
let button5_1 = document.createElement("button");
button5_1.textContent = "Заблокировать";
let button5_2 = document.createElement("button");
button5_2.textContent = "Разблокировать";
let writeDisabled = () => document.getElementById("disabl").disabled = true;
let writeNotDisabled = () => document.getElementById("disabl").disabled = false;
button5_1.addEventListener("click", writeDisabled);
button5_2.addEventListener("click", writeNotDisabled);
let task5 = document.getElementById("task5");
task5.append(text5, input4, button5_1, button5_2);


// Задание 6
let text6 = document.createElement("h2");
text6.textContent = "Задание 6";
let button6 = document.createElement("button");
button6.textContent = "Скрыть|Раскрыть";
let square1 = document.createElement("div");
square1.setAttribute("id", "square");
let displayBlock = () => {
    if (square1.style.display == "none"){
        square1.style.display = "block"
    }
    else{
        square1.style.display = "none"
    }
}
button6.addEventListener("click", displayBlock);
let task6 = document.getElementById("task6");
task6.append(text6, button6, square1);


// Задание 7
let text7 = document.createElement("h2");
text7.textContent = "Задание 7";
let squareColor = document.createElement("div");
squareColor.setAttribute("id", "squareColor");
let task7 = document.getElementById("task7");
let changeColor = () => {
    squareColor.style.backgroundColor = "green"
}
let changeDefoltColor = () => {
    squareColor.style.backgroundColor = "red"
}
squareColor.addEventListener("mouseenter", changeColor)
squareColor.addEventListener("mouseleave", changeDefoltColor)
task7.append(text7, squareColor);


// Задание 8
let text8 = document.createElement("h2");
text8.textContent = "Задание 8";
task8.prepend(text8);

let container = document.getElementById('container');

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('square')) {
        let squares = document.querySelectorAll('.square');
        
        squares.forEach(function(square) {
            if (square.classList.contains('green')) {
                square.classList.remove('green');
                square.classList.add('red');
            }
        });

        event.target.classList.remove('red');
        event.target.classList.add('green');
    }
});
