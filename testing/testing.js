/**let functionVariable = function () {
  console.log('hello world!')
}

function doFlexibleStuff(functionVariable) {
  functionVariable();
  console.log('hello goodmorning!');
}

doFlexibleStuff(functionVariable);

let youGotThis = function () {
  console.log('you got this!');
}

setInterval(youGotThis, 1000);**/

const counter = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let index = 0;
let timer = function () {
  console.log(counter[index]);
  index++;
  if (index === counter.length) {
    console.log('done');
    clearInterval(value);
  }
}

const value = setInterval(timer, 1000);
