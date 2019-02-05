System.register(["../helpers/decorators/index", "./Imprimivel"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, Imprimivel_1, Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (Imprimivel_1_1) {
                Imprimivel_1 = Imprimivel_1_1;
            }
        ],
        execute: function () {
            Negociacao = class Negociacao extends Imprimivel_1.Imprimivel {
                constructor(data, quantidade, valor) {
                    super();
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log(`Data: ${this.data}
                     Quantidade: ${this.quantidade}
                     Valor: ${this.valor}
                     Volume: ${this.volume}`);
                }
            };
            Negociacao = __decorate([
                index_1.ClassDecorator("Decorator para a classe negociação")
            ], Negociacao);
            exports_1("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map