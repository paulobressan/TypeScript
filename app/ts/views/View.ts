//Classe abstrata para manipular views
abstract class View<T> {
    //Elemento onde vai ser renderizado a mensagem
    private _elemento: Element;

    constructor(seletor: string) {
        //Buscando o elemento onde vai ser renderizado a mensagem, atravez do seu seletor
        this._elemento = document.querySelector(seletor);
    }

    update(model: T): void {
        //Rendereizando a msg com o retorno do metodo template
        this._elemento.innerHTML = this.template(model);
    }

    //html que sera retornado para ser renderizado
    //Metodo abstrato onde as classe filhas vão ter que implementalo 
    abstract template(model: T): string;
}