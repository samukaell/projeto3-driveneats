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
    }
];

for(i = 0; i< dadosPratos.length ; i++){
    const comida = `
    <div class="comida">
        <img src="${dadosPratos[i].imageSrc}" class="comida-imagem">
        <p class="comida-nome">${dadosPratos[i].comidaNome}</p>
        <p class="comida-descrisao">${dadosPratos[i].comidaDescrisao}</p>
        <p class="comida-preco">R$ ${dadosPratos[i].comidaPreco}</p>
    </div>
`
    const htmlPratos = document.querySelector(".prato");
    htmlPratos.innerHTML = comida;
}

