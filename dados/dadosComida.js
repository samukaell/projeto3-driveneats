const dadosPratos = [
    {
        imageSrc:"./assests/frango_yin_yang 1.png",
        comidaNome:"Frango Yin Yang",
        comidaDescrisao:"Um pouco de batata, um pouco de salada",
        comidaPreco:"14.90"
    },
    {
        imageSrc:"./assests/frango_yin_yang 1.png",
        comidaNome:"Frango Yin Yang",
        comidaDescrisao:"Um pouco de batata, um pouco de salada",
        comidaPreco:"14.90"
    },
    {
        imageSrc:"./assests/frango_yin_yang 1.png",
        comidaNome:"Frango Yin Yang",
        comidaDescrisao:"Um pouco de batata, um pouco de salada",
        comidaPreco:"14.90"
    },
    {
        imageSrc:"./assests/frango_yin_yang 1.png",
        comidaNome:"Frango Yin Yang",
        comidaDescrisao:"Um pouco de batata, um pouco de salada",
        comidaPreco:"14.90"
    }
];


const dadosBebidas = [
    {
        imageSrc:"./assests/coquinha_gelada 1.png",
        comidaNome:"Coquinha gelada",
        comidaDescrisao:"Lata 350ml",
        comidaPreco:"4.90"
    },
    {
        imageSrc:"./assests/coquinha_gelada 1.png",
        comidaNome:"Coquinha gelada",
        comidaDescrisao:"Lata 350ml",
        comidaPreco:"4.90"
    },
    {
        imageSrc:"./assests/coquinha_gelada 1.png",
        comidaNome:"Coquinha gelada",
        comidaDescrisao:"Lata 350ml",
        comidaPreco:"4.90"
    },
    {
        imageSrc:"./assests/coquinha_gelada 1.png",
        comidaNome:"Coquinha gelada",
        comidaDescrisao:"Lata 350ml",
        comidaPreco:"4.90"
    }
];


const dadosSobremesa = [
    {
        imageSrc:"./assests/pudim 1.png",
        comidaNome:"Pudim",
        comidaDescrisao:"Apenas pudim",
        comidaPreco:"7.90"
    },
    {
        imageSrc:"./assests/pudim 1.png",
        comidaNome:"Pudim",
        comidaDescrisao:"Apenas pudim",
        comidaPreco:"7.90"
    },
    {
        imageSrc:"./assests/pudim 1.png",
        comidaNome:"Pudim",
        comidaDescrisao:"Apenas pudim",
        comidaPreco:"7.90"
    },
    {
        imageSrc:"./assests/pudim 1.png",
        comidaNome:"Pudim",
        comidaDescrisao:"Apenas pudim",
        comidaPreco:"7.90"
    }
];

let pratos = "";
let bebidas = "";
let sobremesas = "";



function criarComida (nome,comida, dadosComida,selecao,valor){
    
    for(i = 0; i< dadosComida.length ; i++){
        comida =comida+ `
        <div class="${nome}" onclick="${selecao}(${i})">
            <div class="comida">
                <img src="${dadosComida[i].imageSrc}" alt="${dadosComida[i].comidaNome}" class="comida-imagem">
                <p class="comida-nome">${dadosComida[i].comidaNome}</p>
                <p class="comida-descrisao">${dadosComida[i].comidaDescrisao}</p>
                <p class="comida-preco">R$ <p class="${valor}">${dadosComida[i].comidaPreco}</p></p>
                <ion-icon name="checkmark-circle" class="check"></ion-icon>
            </div>
        </div>
    `;
    }
    const htmlPratos = document.querySelector(".container-"+nome+"s");
    htmlPratos.innerHTML = comida;

}

criarComida("prato",pratos,dadosPratos,"selecaoPrato","pratoValor");
criarComida("bebida",bebidas,dadosBebidas,"selecionarBebida","bebidaValor");
criarComida("sobremesa",bebidas,dadosSobremesa,"selecionarSobremesa","sobremesaValor");



