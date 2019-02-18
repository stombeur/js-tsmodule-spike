import { Dependency } from "./dep.js";
var Index = /** @class */ (function () {
    function Index() {
    }
    Index.prototype.doSomething = function () {
        var x = new Dependency().getSomething();
        console.log(x);
    };
    return Index;
}());
export { Index };
var button = document.getElementById('clickme');
button.onclick = function () {
    new Index().doSomething();
};
