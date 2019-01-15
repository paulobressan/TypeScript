//Classe responsavel por renderizar mensagens de sucesso
abstract class MensagemView extends View {
    update(mensagem: string): void {
        //Rendereizando a msg com o retorno do metodo template
        this._elemento.innerHTML = this.template(mensagem);
    }

    //html que sera retornado para ser renderizado
    template(mensagem: string): string {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `
    }
}