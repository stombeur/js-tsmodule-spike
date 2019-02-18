System.register(["./dep.js"], function (exports_1, context_1) {
    "use strict";
    var dep_js_1, Index, button;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (dep_js_1_1) {
                dep_js_1 = dep_js_1_1;
            }
        ],
        execute: function () {
            Index = /** @class */ (function () {
                function Index() {
                }
                Index.prototype.doSomething = function () {
                    var x = new dep_js_1.Dependency().getSomething();
                    console.log(x);
                };
                return Index;
            }());
            exports_1("Index", Index);
            button = document.getElementById('clickme');
            button.onclick = function () {
                new Index().doSomething();
            };
        }
    };
});
//# sourceMappingURL=main.js.map