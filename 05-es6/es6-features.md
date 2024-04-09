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
## Array Destructuring
```js
let nos = [10,20]
let [x, y] = nos
```

```js
let x = 10, y = 20
// swap x & y
[x,y] = [y,x]
```
## Rest Operator (Array)
```js
let nos = [10,20,30,40,50]
let [x,y, ...z] = nos
```
### Spread Operator (Array)
```js
let nos = [10,20,30,40,50]
let newNos = [...nos, 100, 200, 300]
```
## Rest & Spread Operator in function arguments
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

## Destructuring (Objects)
```js
let product = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'stationary'
}

let { id, category } = product

// when the variable names are different from the attribute names
let { id:x, category:y } = product

```
## Rest Operator (Objects)
```js
let product = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'stationary'
}

let { id, ...z } = product
```
## Spread Operator (Objects)
```js
let product = {
    id : 100,
    name : 'Pen',
    cost : 10,
    category : 'stationary'
}

let productWithUnits = { ...product, units : 100 }
```
## Arrow functions
```js
/*
//function statement
function add(x,y){
    return x + y;
}

//function expression
let add = function(x,y){
    return x + y;
}

//arrow function
let add = (x,y) => {
    return x + y;
}
*/
let add = (x,y) => x + y;
```
## Default arguments
```js
function add(x = 10, y = 20){
    return x + y;
}

add()

add(100)

add(undefined, 200)

add(100,200)
```
## Iterators
```js
let nos = [10,20,30,40,50]

for (let no of nos){
    console.log(no)
}
```
## Class
```js
class Employee{
    //class scope

    //private
    #id = 0;
 
    //public
    name = '';
    salary = 0;

    //static
    static ModelType = 'Employee'

    //accessor methods
    get id(){
        console.log('getter[id] triggered')
        return this.#id;
    }

    set id(val){
        // validate the data
        console.log('setter[id] triggered')
        this.#id = val;
    }

    //constructor method
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //instance method
    format(){
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`
    }

    //static method
    static IsEmployee(obj){
        return obj instanceof Employee;
    }
    
}
let emp = new Employee(100, 'Magesh', 10000)

```

```js
//class inheritance
class FulltimeEmployee extends Employee{
    benefits = '';

    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }

    //method overriding
    format(){
        return `${super.format()}, benefits = ${this.benefits}`
    }
}
```

## Reference
- https://es6-features.org

