const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURls = require('./http-validacao');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('linksvalidados'), validaURls(resultado));
    }else{
    console.log(chalk.yellow('lista de links'), resultado);
    }
}



processaTexto(caminho);