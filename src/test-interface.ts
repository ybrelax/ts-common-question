interface StringArray {
    [index:number]:string
}

let arr:StringArray = ['aaa', 'bbb'];
console.log(arr)


interface stringObject {
    [index:string]:string
}

let obj:stringObject = {name: 'cccc'}

interface discount1 {
    getNum: (price:number) => number
}

interface discount2 {
    (price:number): number
}

let cost:discount2 = function(price:number) {
    return price * 8;
}