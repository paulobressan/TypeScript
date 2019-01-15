class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        //View para renderizar as negociações
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        //View para renderizar mensagens
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        //Assim que a pagina for carregada, vamos carregar a tebela
        this._negociacoesView.update(this._negociacoes);
    }
    //O parametro passado é um evento e para eventos podemos passar o tipo Event
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
        //capturar o valor do input com o jquery
        new Date(this._inputData.val().replace(/-/g, ',')), this._inputQuantidade.val(), this._inputValor.val());
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(negociacao => console.log(negociacao));
        //Toda vez que uma negociação for adicionado, vamos atualiza a tabela
        this._negociacoesView.update(this._negociacoes);
        //Renderizando uma mensagem
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
