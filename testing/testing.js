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
/**
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

const value = setInterval(timer, 1000); **/
/** 
const posts = [
  { post_id: 1, post_title: 'First Post' },
  { post_id: 2, post_title: 'Second Post' },
  { post_id: 3, post_title: 'Third Post' },
];

const comments = [
  { post_id: 2, comment: 'Great!'},
  { post_id: 2, comment: 'Nice Post!'},
  { post_id: 3, comment: 'Awesome Post!'},
];

function newPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const sum = a + b;
      if (isNaN(sum)) {
        reject('this cannot be placed');
      } else {
        resolve(sum);
      }
    }, 2000);
  });
}
  
newPromise(4, 5).then(function(result) {
  console.log('first handler');
  return result;

}).then(function(result) {
  console.log('second handler')
  console.log(result)

}).catch(function(error) {
  console.log(error);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 4 + 5;
    if (isNaN(sum)) {
      reject('this is an error');
    } else {
      resolve(sum);
    }
  }, 2000);
});

promise.then(function(result) {
 console.log(result);
}).catch(function(error) {
 console.log(error);
});

const sayHello = function () {
  console.log('hello');
}
sayHello();


function getProduct(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a * b);
    }, 1000);
  });
}

const resultMath = async () => {
  try {
    const result = await getProduct(2, 4);
    const secondResult = await getProduct(result, 2);
    console.log(`results of the final product: ${secondResult}`);
  } catch (error) {
    console.log(error);
  }
} 
resultMath(); **/
/** 
getProduct(2, 4)
  .then(function (result) {
    getProduct(result, 2)
      .then(function (finalResult) {
        console.log('final_result', finalResult);
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  .catch(function (error) {
    console.log(error);
  }); 

const promise1 = new Promise((resolve, reject) => reject('promise1 success'));
const promise2 = new Promise((resolve, reject) => reject('promise2 success'));
const promise3 = new Promise((resolve, reject) => reject('promise3 success'));

Promise.allSettled([promise1, promise2, promise3]).then((result) => {
  console.log('resolved', result);
}); **/
/**
const value = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const json = await data.json();
  return console.log(json);
}

value();  

fetch('https://jsonplaceholder.typicode.com/users/1', { 
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Benjamin Asjali',
    email: 'beasjali@addu.edu.ph'
  }),
  
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error)); **/

  fetch('https://jsonplaceholder.typicode.com/users/1', { 
  method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));