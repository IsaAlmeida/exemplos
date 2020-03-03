function escreve_mensagem(valor){
    mensagem = "Você escreveu '"+valor+"' ";
    alert(mensagem);
    if(isNaN(valor)){
        alert(valor + "Não é um número");
    }else{
        alert(valor + "é um número");
    }
}