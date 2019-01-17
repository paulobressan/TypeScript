//Importando classes
//O index é utilizado como estratégia Barril, ele exporta todos os modulos da pasta views ou models, cada pasta tem o o seu
import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao } from "../models/index";

export class NegociacaoController {
    //Criando as propriedade para os input, como o input é um elemento as prop tem que ser do tipo HTMLInputElement
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    //View para renderizar as negociações
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    //View para renderizar mensagens
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        //Assim que a pagina for carregada, vamos carregar a tebela
        this._negociacoesView.update(this._negociacoes);
    }

    //O parametro passado é um evento e para eventos podemos passar o tipo Event
    adiciona(event: Event) {
        event.preventDefault();

        const negociacao = new Negociacao(
            //capturar o valor do input com o jquery
            new Date((<string>this._inputData.val()).replace(/-/g, ',')),
            (<number>this._inputQuantidade.val()),
            (<number>this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(negociacao => console.log(negociacao));
        //Toda vez que uma negociação for adicionado, vamos atualiza a tabela
        this._negociacoesView.update(this._negociacoes);
        //Renderizando uma mensagem
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}