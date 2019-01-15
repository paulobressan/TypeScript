var negociacaoController = new NegociacaoController();

//Realizando bind do adiciona no evento submit do formulario
$('.form').submit(negociacaoController.adiciona.bind(negociacaoController));