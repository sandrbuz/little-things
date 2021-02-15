// let test1 = function (howManyTimes, whatToDraw) {

//     for (i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }


// };

// test1(5, 'fsdfs');
// ----------------------------------------------------------------------------------------------

// let test = function (name) {
//     if (name.length < 5) {
//         return;
//     }
//     return 'пятая буква вашего имени:' + name[4] + '.';
// };



// console.log(test('Николай'));


// ------------------------------------------------------------------------------------------------------

var headEl = document.getElementById("main-heading");

var tester = prompt('введите новый заголовок:');

headEl.innerHTML = tester;