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

function finalizarPedido(){
   if(
       prato.comidaNome !== null &&
       bebida.comidaNome !== null &&
       sobremesa.comidaNome !== null
    )
   {
    const confimar = document.querySelector(".escondido");
    confimar.classList.remove("escondido"); 

    passandoPedidos("pConfirme",prato.comidaNome,prato.comidaPreco);
    passandoPedidos("bConfirme",bebida.comidaNome,bebida.comidaPreco);
    passandoPedidos("sConfirme",sobremesa.comidaNome,sobremesa.comidaPreco);

    let total = parseInt(prato.comidaPreco)+parseInt(bebida.comidaPreco)+parseInt(sobremesa.comidaPreco);
    passandoPedidos("tConfirme","TOTAL",total.toFixed(2));
   }
}


function cancelarPedido(){
    const confimar = document.querySelector(".confirmacao-pedido");
    confimar.classList.add("escondido");
}

