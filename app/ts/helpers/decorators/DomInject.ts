//O DomInject é um decorator que vai carregar um elemento do html quando alguem chamar a propriedade que implementou o decorator
export function DomInject(seletor: string) {
    //Quando se trata de um decorator para uma propriedade e não um metodo, não podemos colocar o parametro descriptor
    return function (target: any, propertyKey: string) {
        //Elemento do DOM
        let elemento: JQuery;

        const getter = function () {
            //Se o elemento não foi selecionado, vamos selecionar. Se não vamos retorna-lo.
            if (!elemento) {
                console.log(`buscando ${seletor} para injetar em ${propertyKey}`);
                elemento = $(seletor);
            }
            return elemento;
        }

        /*O Metodo defineProperty é um metodo do objeto Object que cria uma propriedade dinamicamente passando para quem essa propriedade vai
        o seu nome e o seu get que no caso é o retorno da função que getter armazena
        */
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    }
}