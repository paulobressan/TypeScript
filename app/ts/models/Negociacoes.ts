class Negociacoes{
    //criando um array de negociações que vai conter objetos do tipo Negociacao
    private _negociacoes : Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    paraArray(){
        return [].concat(this._negociacoes);
    }
}