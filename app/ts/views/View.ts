//Classe abstrata para manipular views
export abstract class View<T> {
    //Elemento onde vai ser renderizado a mensagem
    private _elemento: JQuery;
    //o escapar vai remover qualquer tag script no template
    private _escapar: boolean;

    constructor(seletor: string, escapar?: boolean) {
        //Buscando o elemento onde vai ser renderizado a mensagem, atravez do seu seletor
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T): void {
        let template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        //Rendereizando a msg com o retorno do metodo template
        this._elemento.html(template);
    }

    //html que sera retornado para ser renderizado
    //Metodo abstrato onde as classe filhas vão ter que implementalo 
    abstract template(model: T): string;
}