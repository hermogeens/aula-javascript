

function validaCampo(valor,id, mensagem) {
    if (!isNaN(valor)) {
        valor = parseInt(valor);
        return valor;
    } else {
        document.getElementById(id).style.color = 'red';
        document.getElementById(id).innerHTML = mensagem;
    } return 0;
}
function cadastrar() {
    let formulario=[];

    let nome = document.getElementById('nome').value;
    formulario.push(nome);

    let fone = document.getElementById('fone').value;
    formulario.push(fone);

    let cidade = document.getElementById('cidade').value;
    formulario.push(cidade);

    if (document.getElementById('masc').checked){
        sexo = 'Masculino';
    }else if (document.getElementById('fem').checked){
        sexo = 'Feminino';
    }else{
        sexo = 'Prefiro não comentar';
    }
    formulario.push(sexo);

    console.log(formulario);
    limparFormulario()

    function limparFormulario(){
        document.getElementById('nome').value = "";
        document.getElementById('fone').value = "";
        document.getElementById('masc').checked = true;
        document.getElementById('nome').focus();
    }
}