const fetch = require('node-fetch');

function geraArrayDeURLs(arrayLinks){
    //loop para cada objeto {chave:valor}
    //objeto -> [valor]
    //Object.values(objeto)
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join()); //map trabalha com metodo callback

}

function validaURls(arrayLinks){
    return geraArrayDeURLs(arrayLinks);
}

module.exports = validaURls;