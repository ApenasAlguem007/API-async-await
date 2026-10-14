async function carregarProdutos(){

    try{
          const response = await fetch(
        "https://dummyjson.com/products"
    );

    console.log(response);

    const dados = await response.json();

    document.getElementById("resposta").textContent = JSON.stringify(dados, null, 4);
    } catch (erro){
    console.error(erro);

    document.getElementById("resposta").textContent = "Erro ao carregar os Produtos";
}
}
