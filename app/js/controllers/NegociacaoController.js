System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, index_3, index_4, index_5, NegociacaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacaoService = new index_4.NegociacaoService();
                    this._negociacoes = new index_2.Negociacoes();
                    this._negociacoesView = new index_1.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Não é possivel criar negociações em dias não utel.');
                        return;
                    }
                    const negociacao = new index_2.Negociacao(data, this._inputQuantidade.val(), this._inputValor.val());
                    this._negociacoes.adiciona(negociacao);
                    index_5.imprime(negociacao, this._negociacoes);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso');
                }
                _ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
                }
                importaDados() {
                    const isOk = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            return new Error(res.statusText);
                        }
                    };
                    this._negociacaoService.obterNegociacoes(isOk)
                        .then(negociacoesParaImportar => {
                        const negociacoes = this._negociacoes.paraArray();
                        negociacoesParaImportar.filter(negociacao => !negociacoesParaImportar.some(jaImportada => negociacao.ehIgual(jaImportada)));
                        negociacoesParaImportar.forEach(negociacao => {
                            this._negociacoes.adiciona(negociacao);
                            this._negociacoesView.update(this._negociacoes);
                        });
                    })
                        .catch(err => console.log(err));
                }
            };
            __decorate([
                index_3.DomInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.DomInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.DomInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.Throttle()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.Throttle()
            ], NegociacaoController.prototype, "importaDados", null);
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map