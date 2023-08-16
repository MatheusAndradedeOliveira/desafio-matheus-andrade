class CaixaDaLanchonete {
    constructor(){
        this.itens = {
            "cafe": { descricao: "Café", valor: 3.00 },
            "chantily": { descricao: "Chantily (extra do Café)", valor: 1.50 },
            "suco": { descricao: "Suco Natural", valor: 6.20 },
            "sanduiche": { descricao: "Sanduíche", valor: 6.50 },
            "queijo": { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            "salgado": { descricao: "Salgado", valor: 7.25 },
            "combo1": { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            "combo2": { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
        };
        this.metodoDePagamento = ["dinheiro", "debito", "credito"];
    }
    calcularValorDaCompra(metodoDePagamento, itens) {
                                
              
                if (itens.length === 0) {
                    return "Não há itens no carrinho de compra!";
                }
        
                let total = 0.0;
                let itemPrincipalPresente = false;
                let itemExtraPresente = false;
        
                for (const item of itens) {
                    const [codigo, quantidade]= item.split(',');
                    if (!(codigo in this.itens)) {
                        return "Item inválido!";
                    }
                    const { descricao, valor } = this.itens[codigo];
        
                    if (descricao.toLowerCase().includes("extra")) {
                        if (!itemPrincipalPresente) {
                            itemExtraPresente = true;
                        }
                        total += valor * quantidade;
                        
                    } else {
                        total += valor * quantidade;
                        itemPrincipalPresente = true;
                    }
                    }
                    
                if (total === 0) {
                    return 'Quantidade inválida!';
     
                }

                if (itemExtraPresente && !itemPrincipalPresente) {
                    return "Item extra não pode ser pedido sem o principal";
                }

                if (!itemPrincipalPresente) {
                    return "Não há itens no carrinho de compra!";
                }
        
                if (!this.metodoDePagamento.includes(metodoDePagamento) ){
                    return "Forma de pagamento inválida!";
                }
                if (metodoDePagamento === "dinheiro") {
                    total *= 0.95; 
                    
                } else if (metodoDePagamento === "credito") {
                    total *= 1.03; 
                    
                 
                    
                }
                return `R$ ${total.toFixed(2).replace('.', ',')}`;
            }
    

            
        }
    
        

export { CaixaDaLanchonete };
