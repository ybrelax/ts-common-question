interface StringArray {
    [index:number]:string
}

let arr:StringArray = ['aaa', 'bbb'];
console.log(arr)


interface stringObject {
    [index:string]:string
}

let obj:stringObject = {name: 'cccc'}