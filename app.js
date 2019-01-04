let htttp = require('http');
let fs = require('fs');


htttp.createServer(function(requisicao, resposta){
    
    let arquivo = 'fundo.jpg';

    fs.stat(arquivo, function(erro, stat){
        if(erro){
            resposta.writeHead(417, {'Content-Type': 'text/plain'});
            resposta.end("Erro ao processar imagem");
        }
        else{
            let imagem = fs.readFileSync(arquivo);
            resposta.contentType= 'imagem/png';
            resposta.contentLength = stat.size;
            resposta.end(imagem, 'binary');
        }
    })

}).listen(8194);