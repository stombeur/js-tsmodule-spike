System.register([], function (exports_1, context_1) {
    "use strict";
    var Dependency;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Dependency = /** @class */ (function () {
                function Dependency() {
                }
                Dependency.prototype.getSomething = function () {
                    return 99;
                };
                return Dependency;
            }());
            exports_1("Dependency", Dependency);
        }
    };
});
//# sourceMappingURL=dep.js.map