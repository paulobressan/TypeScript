class View {
    //Elemento onde vai ser renderizado a mensagem
    protected _elemento: Element;

    constructor(seletor: string) {
        //Buscando o elemento onde vai ser renderizado a mensagem, atravez do seu seletor
        this._elemento = document.querySelector(seletor);
    }
}