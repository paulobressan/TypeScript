//Classe abstrata para manipular views
class View {
    constructor(seletor) {
        //Buscando o elemento onde vai ser renderizado a mensagem, atravez do seu seletor
        this._elemento = $(seletor);
    }
    update(model) {
        //Rendereizando a msg com o retorno do metodo template
        this._elemento.html(this.template(model));
    }
}
