//O arquivo index.ts vai exportar todos os modulos da pasta models
//ao utilizar mais de um modulo da pasta views, podemos usar o index

//Quando utilizamos classes do mesmo modelo, por exemplo em negociacao e negociacoes usa classes
//do mesmo modelo e por isso o systemjs da uma falha de constructor null, para resolver isso temos que
//colocar a dependencia da classe negociacao e negociacoes que é a Imprimivel, em primeiro lugar de todas
//Porem para não haver essa falha, podemos optar por importar direto a classe Imprimivel e não o Barrel
//porque ela estão todas no mesmo modulo.
//O ERRO ACONTECE SOMENTE QUANDO SE TRATA DE CLASSES QUE EXPORTAM NO MESMO BARREL
export * from './Negociacao';
export * from './Negociacoes';
export * from './NegociacaoParcial';
export * from './Imprimivel';
