const chalk = require('chalk');
const fs = require('fs'); /*ja vem com o node, nao precisa instalar*/

function trataErro(erro){
  throw new Error (erro); /*lançar o erro para ser tratado*/ 
}

function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  fs.promises
  .readFile( caminhoDoArquivo, encoding)  
  .then((texto) => console.log(texto))
  .catch((erro) => trataErro(erro))
}


//function pegaArquivo(caminhoDoArquivo){
//  const encoding = 'utf-8'
//  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//    if (erro){
//      trataErro(erro);
//    }
//    console.log(chalk.green(texto));
//  })
//}

pegaArquivo('./arquivos/texto1.md')  