class View {
    constructor(seletor) {
        //Buscando o elemento onde vai ser renderizado a mensagem, atravez do seu seletor
        this._elemento = document.querySelector(seletor);
    }
}
