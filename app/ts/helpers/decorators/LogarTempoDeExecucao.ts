//Para definir um decorator temos que criar uma função dentro de outra função
export function LogarTempoDeExecucao(logar: string = '') {
    //target é a instancia do metodo que o decorator foi colocado
    //propertyKey é o nome do metodo
    //descriptor é o parametro que sabe tudo sobre o metodo onde o decorator for implementado
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        //O value é o metodo no qual o decorator esta sendo posicionado
        const metodoOriginal = descriptor.value;
        //vamos sobrescrever o metodo original para um novo metodo onde vamos ter o código do decorator e um
        //invoke para o metodo original
        descriptor.value = function (...args: any[]/** O args foi colocado porque não sabemos a quantidade de parametros que o metodo que for implementar o decorator tem.*/) {
            console.log(logar);
            //invoke do metodo original e o seu retorno sera retornado no metodo que vai sobrescrever para não
            //afetar o funcionamento do metodo que o decorator vai implementado.
            //A função apply existem em qualquer função no javascript, ela é responsavel por invocar um metodo
            //em um contexto defirente, no caso o contexto é o this que sera a "classe" onde vai ser executado o decorator
            // e na frente são os parametros do que esse metodo espera
            const retorno = metodoOriginal.apply(this, args);
            //retorno do metodo invocado
            return retorno;
        }

        //retornando todo cont
        return descriptor;
    }
}