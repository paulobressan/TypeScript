class Negociacoes {
    constructor() {
        //criando um array de negociações que vai conter objetos do tipo Negociacao
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
