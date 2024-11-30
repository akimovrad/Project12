// var a = 34;
// let b = 40;
// const c = 50;

// {
    // let m = 50;
//     var s = 40;
//     console.log(m + s);
    
// }


var s = 50;
let m = 40;

console.log(s);


function arri(){
    return 'Helo'
}

console.log(arri());


const arr1 = function(){
    return'Billi'
}


const arr = () =>{
    return'ki'
}


console.log(arr());
console.log(arr1());


// operatop spread (...)


let mas = [1, 2, 3]

console.log([...mas, 4, 5]);


let obj = {name: 'bil', age: 4}

console.log({...obj, married: 'я гей'});

// Деструктуризация массиов и обектов

const fun = () =>{
    return [1, 2, 3]
}


let [a, b, c, d] = fun();

console.log(a);


const fon = () => {
    return { 
        x: 10,
        y: 12,
        z: 30,
    }
}


let {x: num1, y: num2, z: num3} = fon();
console.log(num1 + num2);



let firstname = 'billi krash';
let secondname = 'akimovkrash';

console.log(`name: ${firstname}, surmane: ${secondname}`);


const foo = (a, ...b) =>{
    return `${a} : ${b}`
}

console.log(foo(10, 12));
