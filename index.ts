type Produto = { 
    id: number;
    nome: string; 
    preco: number; 
    categoria: string;
    emEstoque : boolean; 
}

const produtos: Produto[] = [ 
    { 
     id: 1, 
     nome: "Iphone 15", 
     preco: 5999.0, 
     categoria: "Eletrônicos", 
     emEstoque: true,
    },

    { 
        id: 2, 
        nome: "Cabo HDMI", 
        preco: 49.99,
        categoria: "Eletrônicos",
        emEstoque: false,
    }, 

    {
        id: 3, 
        nome: "Nike Air Max",
        preco: 394.90, 
        categoria: "Vestimentas", 
        emEstoque: true,
    },

    {
        id: 4,
        nome: "Necesseire",
        preco: 39.9,
        categoria: "Acessórios",
        emEstoque: false,
    }
]; 

function exibirProdutos(produto: Produto): string {
    const precoFormatado = produto.preco.toLocaleString("pt-BR", 
        { style: "currency", currency: "BRL" }); // Formatando preço
    
    const status = produto.emEstoque ? "Disponível" : "Indisponível"; // Verificando disponibilidade
    return `[${produto.categoria}] ${produto.nome} - ${precoFormatado} - ${status}`; 
}

console.log("=== Catálogo de Produtos ===\n");
for (const produto of produtos) {
    console.log(exibirProdutos(produto));
}