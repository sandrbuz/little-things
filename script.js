// let test1 = function (howManyTimes, whatToDraw) {

//     for (i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }


// };

// test1(5, 'fsdfs');

// вывод в консоль указанного рисунка/буквы, указанное кол-во раз
// ----------------------------------------------------------------------------------------------

// let test = function (name) {
//     if (name.length < 5) {
//         return;
//     }
//     return 'пятая буква вашего имени:' + name[4] + '.';
// };



// console.log(test('Николай'));

// выведет 5ю букву введенного имени, если его длина больше 5
// ------------------------------------------------------------------------------------------------------

// var headEl = document.getElementById("main-heading");

// var tester = prompt('введите новый заголовок:');

// headEl.innerHTML = tester;


// смена текста в указанном теге
// --------------------------------------------------------------------------------


// var tester = prompt('введите новый заголовок:');
// $('#main-heading').text(tester);

// смена текста с помощью jquerry
// ------------------------------------------------------------------------------


// $('body').append('<p>Это текс добавленный с помощью jquery</p>');

// добавить тег в дерево 
// ----------------------------------------------------------------------------------



// for (i = 0; i < 3; i++) {
//     var hobby = prompt('Укажите одно из своих хобби');
//     $('body').append('<p>' + hobby + '</p>');
// }

// добавить по-очереди свои хобби jquerry
// --------------------------------------------------------------------------------------------

// $('h1').fadeOut(3000);



// заголовки постепенно исчезают
// -------------------------------------------------------------------------------------


// $('h1').text('текст скоро исчезнеэ').fadeOut(3000);


// --------------------------------------------------------------------------------------
// $('h1').slideUp(1000).slideDown(1000);

// сначала заголовок сворачивает наверх, а потом разворачивает вниз 
// ------------------------------------------------------------------------------------------

// let counter = 1;
// let test = function () {
//     console.log('ты смотришь уже ' + counter + ' сек.');
//     counter++;
// }
// setInterval(test, 1000);


// запускать функцию test каждую секунду
// ------------------------------------------------------------------------------------------------
// let out = function () {
//     document.getElementById('main-heading').style.opacity = '0';
// }
// let up = function () {
//     document.getElementById('main-heading').style.opacity = '1';
// }

// let heading = document.getElementById('main-heading');
// heading.addEventListener('mousedown', out);
// heading.addEventListener('mouseup', up);


// исчезновение элемента при нажатии, появление при отжатии мыши
// -------------------------------------------------------------------------------------------

let pointt1 = document.querySelector('.point1');
let pointt2 = document.querySelector('.point2');
let pointt3 = document.querySelector('.point3');
let pointt4 = document.querySelector('.point4');

let menu = document.getElementById('wrapperr');

let ar1 = document.getElementById('arr1');
let ar2 = document.getElementById('arr2');

let pointsIn = function () {
    pointt1.classList.add('open');
    pointt2.classList.add('open');
    pointt3.classList.add('open');
    pointt4.classList.add('open');
    ar1.classList.add('close-arr');
    ar2.classList.add('open-arr');


}

let pointsOut = function () {
    pointt1.classList.remove('open');
    pointt2.classList.remove('open');
    pointt3.classList.remove('open');
    pointt4.classList.remove('open');
    ar1.classList.remove('close-arr');
    ar2.classList.remove('open-arr');
}


menu.addEventListener('mouseover', pointsIn);
menu.addEventListener('mouseout', pointsOut);

