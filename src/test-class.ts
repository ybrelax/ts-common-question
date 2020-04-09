interface A {
    name: string,

    speak(words: string): void
}

interface B {
    age: number
}

class Cat implements A, B {
    public name:string;
    public age = 18;

    speak(words:string) {
        console.log('the cat say:', words)
    }
}