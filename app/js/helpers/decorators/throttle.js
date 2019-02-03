System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Throttle(milessegundos = 500) {
        return function (target, propertyKey, descriptor) {
            let metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearTimeout(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args), milessegundos);
            };
            return descriptor;
        };
    }
    exports_1("Throttle", Throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=throttle.js.map