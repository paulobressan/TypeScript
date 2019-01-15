namespace Views{
    //Importando a classe abstrata View e adicionando atribuindo uma referencia 
    import View = Views.View;
    //Classe responsavel por renderizar mensagens de sucesso
    export class MensagemView extends View<string> {
        //html que sera retornado para ser renderizado
        //O template é subscrito da View
        template(mensagem: string): string {
            return `
                <p class="alert alert-info">${mensagem}</p>
            `
        }
    }
}