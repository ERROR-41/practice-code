const arr = [];

for (let index = 0; index <=20; index++) {
    let num = Math.floor(Math.random(1,20)*21) ;
    arr.push(num);   
}

arr.sort()

console.log(...arr);