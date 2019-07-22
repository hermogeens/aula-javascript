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
}