class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        //View para renderizar as negociações
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        //View para renderizar mensagens
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        //Assim que a pagina for carregada, vamos carregar a tebela
        this._negociacoesView.update(this._negociacoes);
    }
    //O parametro passado é um evento e para eventos podemos passar o tipo Event
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(negociacao => console.log(negociacao));
        //Toda vez que uma negociação for adicionado, vamos atualiza a tabela
        this._negociacoesView.update(this._negociacoes);
        //Renderizando uma mensagem
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
