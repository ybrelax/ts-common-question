class Father {
    content: string; // 默认public
    public name: string; // public 都可以访问
    protected age: number; // 定义在类中， 类的实例，子类，子类实例都可以访问
    private money: number; // 只能在定义的类中访问，子类，子类实例都不可以范文

    constructor(name: string, age: number, moneny:number) {
        this.name = name;
        this.age = age;
        this.money = moneny;
    }

    getName():string {
        return this.name;
    }
}

const father = new Father('ybrelax', 20, 100);

console.log(father.name);
console.log(father.age); // 报错