function createObj(name: any, sex: any): Array<any> {
    return [name, sex]
}

function createObj1(name: string, sex: string): Array<string> {
    return [name, sex]
}

function createObj2<T>(name: T, sex: T): Array<T> {
    return [name, sex]
}

const result = createObj2<string>('ybrelax', '1')


 // 类型谓词
interface Bird {
    fly()
    layEggs()
}
interface Fish {
    swim()
    layEggs()
}

function getSmallPet():Fish | Bird{
    return ;
}
let pet = getSmallPet();

pet.layEggs();
// 当使用联合类型时，如果不用类型断言，默认只会从中获取共有的部分
(pet as Fish).swim();
// pet.swim();

// 使用类型谓词 
function isFish(pet:Fish | Bird):pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if(isFish(pet)){
    pet.swim();
}else{
    pet.fly();
}

console.log('generic pet:', pet)


a?.b;

