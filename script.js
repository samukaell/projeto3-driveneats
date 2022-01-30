let prato = {
    comidaNome:null,
    comidaPreco:null
}

let bebida = {
    comidaNome:null,
    comidaPreco:null
}

let sobremesa = {
    comidaNome:null,
    comidaPreco:null
}

/*Cadastro */

let usuario = {
    nome:null,
    endereco:null,
    telefone:null
}


function selecaoComida(comida,codComida) {
    const selecionado = document.querySelector("."+comida+"-selecionado");
    if(selecionado !== null){
        selecionado.classList.remove(comida+"-selecionado");
    }

    const pratosAll = document.querySelectorAll("."+comida);
    const prato = pratosAll[codComida];
    prato.classList.add(comida+"-selecionado");

    const nome = prato.querySelector(".comida-nome");
    const preco = prato.querySelector("."+comida+"Valor");

    const resultado = {
        nomeComida: nome,
        precoComida: preco
    }

    return resultado;
}



function selecaoPrato(codPrato){
      
    const pratoSelecionado = selecaoComida("prato",codPrato);

    prato.comidaNome = pratoSelecionado.nomeComida.innerText;
    prato.comidaPreco = pratoSelecionado.precoComida.innerText;
    
}


function selecionarBebida(codbebida){
    const bebidaSelecionado = selecaoComida("bebida",codbebida);

    bebida.comidaNome = bebidaSelecionado.nomeComida.innerText;
    bebida.comidaPreco = bebidaSelecionado.precoComida.innerText;
}


function selecionarSobremesa(codsobremesa){
    const sobremesaSelecionado = selecaoComida("sobremesa",codsobremesa);

    sobremesa.comidaNome = sobremesaSelecionado.nomeComida.innerText;
    sobremesa.comidaPreco = sobremesaSelecionado.precoComida.innerText;
}

function passandoPedidos(comida,nomePedido,valorPedido){
    const pedidoNome = document.querySelector("."+comida);
    pedidoNome.innerHTML = 
    `
        <p class="nome">${nomePedido}</p>
        <p class="valor">${valorPedido}</p>
    `
}

function passarInforUser(){
    const cliente = document.querySelector(".cliente");
    cliente.innerHTML = 
    `
        <p class="nome-cliente">Entregar à ${usuario.nome}</p>
        <p class="endereco-cliente">Para entregar no ${usuario.endereco}</p>

    `
}

function finalizarPedido(){
   if(
       prato.comidaNome !== null &&
       bebida.comidaNome !== null &&
       sobremesa.comidaNome !== null
    )
   {

    passarInforUser();

    const exibir = document.querySelector(".escondido");
    exibir.classList.remove("escondido"); 

    const exibirFundo = document.querySelector(".escondidoFundo");
    exibirFundo.classList.remove("escondidoFundo"); 

    passandoPedidos("pConfirme",prato.comidaNome,prato.comidaPreco);
    passandoPedidos("bConfirme",bebida.comidaNome,bebida.comidaPreco);
    passandoPedidos("sConfirme",sobremesa.comidaNome,sobremesa.comidaPreco);

    let total = parseInt(prato.comidaPreco)+parseInt(bebida.comidaPreco)+parseInt(sobremesa.comidaPreco);
    passandoPedidos("tConfirme","TOTAL",total.toFixed(2));
   }

}


function cancelarPedido(){
    const exibir = document.querySelector(".confirmacao-pedido");
    exibir.classList.add("escondido");

    const exibirFundo = document.querySelector(".fundo-branco");
    exibirFundo.classList.add("escondidoFundo");

}

/*Cadastro*/ 



function confirmarCadastro(){
    const userName = document.querySelector("#nome");
    usuario.nome = userName.value;

    const userEndereco = document.querySelector("#endereco");
    usuario.endereco = userEndereco.value;

    const userTelefone= document.querySelector("#telefone");
    usuario.telefone = userTelefone.value;

    if(usuario.nome !== "" && usuario.endereco !== "" && usuario.telefone !== ""){

        const cadastro = document.querySelector(".cadastro ");
        cadastro.classList.add("escondido-cadastro");
    
        const cadastroFundo = document.querySelector(".cadastro-fundo");
        cadastroFundo.classList.add("escondido-cadastro-fundo");
    }
}

