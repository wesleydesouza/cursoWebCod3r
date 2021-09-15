const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

const paraObjeto = json => JSON.parse(json);//convertento JSON para OBJ
const apenasPreco = produto => produto.preco;

const precos = carrinho.map(paraObjeto).map(apenasPreco);
console.log(precos);