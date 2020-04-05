/*
    元组越界问题
*/

let x: [string, number] = ['ybrelax', 10];

x.push(5);

console.log('x:', x);

// error tip: Tuple type '[string, number]' of length '2' has no element at index '2'
console.log(x[0],x[1], x[2])