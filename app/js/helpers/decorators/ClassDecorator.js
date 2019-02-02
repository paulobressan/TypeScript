System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function ClassDecorator(log = '') {
        return function (constructor) {
            const original = constructor;
            const novo = function (...args) {
                console.log(log);
                console.log("Criando uma instância com New: " + original.name);
                return new original(...args);
            };
            novo.prototype = original.prototype;
            return novo;
        };
    }
    exports_1("ClassDecorator", ClassDecorator);
    return {
        setters: [],
        execute: function () {
        }
    };
});
