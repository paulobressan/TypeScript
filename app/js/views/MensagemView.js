//Classe responsavel por renderizar mensagens de sucesso
class MensagemView extends View {
    //html que sera retornado para ser renderizado
    //O template é subscrito da View
    template(mensagem) {
        return `
            <p class="alert alert-info">${mensagem}</p>
        `;
    }
}
