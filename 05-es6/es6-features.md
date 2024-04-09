# ES6 / ES2015 Features
ECMAScript-6

## let
```JS
let x;

let y = 100;

for(let i = 0; i < 10; i++){
}
```
## const
```JS
const pi = 3.14
```
### Array Destructuring
```js
let nos = [10,20]
let [x, y] = nos
```

```js
let x = 10, y = 20
// swap x & y
[x,y] = [y,x]
```
### Rest Operator (Array)
```js
let nos = [10,20,30,40,50]
let [x,y, ...z] = nos
```
### Spread Operator (Array)
```js
let nos = [10,20,30,40,50]
let newNos = [...nos, 100, 200, 300]
```
### Rest & Spread Operator in function arguments
```js
function sum(...nos){
    let result = 0;
    for (let idx = 0; idx < nos.length; idx++){
        result += nos[idx];
    }
    return result;
}

console.log(sum(10))
console.log(sum(10,20))
console.log(sum(10,20,30,40,50))
let values = [3,1,4,2,5]
console.log(sum(...values))
```