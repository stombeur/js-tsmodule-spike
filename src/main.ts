import { Dependency } from "./dep.js";


export class Index {
    constructor() {}

    public doSomething() {
        let x = new Dependency().getSomething();
        console.log(x);
    }
}

let button = document.getElementById('clickme');
button.onclick = () => {
    new Index().doSomething();
};