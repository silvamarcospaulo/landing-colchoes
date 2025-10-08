export class Produto {
    public id!: number;
    public categoria?: string[];
    public nomeDoProduto?: string;
    public descricao?: string;
    public cor?: string;
    public altura?: number;
    public largura?: number;
    public profundidade?: number;
    public comprimento?: number;
    public diametro?: number;
    public capacidade?: number;
    public quantidadeDePortas?: number;
    public quantidadeDeBocas?: number;
    public quantidadeDeLugares?: number;
    public formato?: string;
    public tamanho?: string;
    public tipo?: string;
    public comOuSemBraco?: string;
    public quantidadeDePrateleiras?: number;
    public imagem?: string;

    constructor(init: Partial<Produto>) {
        Object.assign(this, init);
    }
}