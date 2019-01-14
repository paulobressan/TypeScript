class Negociacoes {
    constructor() {
        //criando um array de negociações que vai conter objetos do tipo Negociacao
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        //ParaArray retorna um novo array de objetos, isso aplica a programação defenciva, onde quem receber
        //o array de negociações não vai conseguir modificar o array original, somente a copia
        return [].concat(this._negociacoes);
    }
}
