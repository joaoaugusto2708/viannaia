import No from "./No.js"
import BuscaBprofundidade from "./BuscaBprofundidade.js"
import buscaPorLargura from "./BuscaBLargura.js"
import BuscaBLargura from "./BuscaBLargura.js";
class Arvore{
    raiz = null;

    constructor(valor){
        this.raiz = new No(valor);
    }

    buscarPpreordem(){
        console.log("Busca em pre-ordem")
        BuscaBprofundidade.preordem(this.raiz);


    }

    buscarPosordem(){
        console.log("Busca em pos-ordem")
        BuscaBprofundidade.preordem(this.raiz);


    }

    buscarInOrdem(){
        console.log("Busca em in-ordem")
        BuscaBprofundidade.preordem(this.raiz);


    }

    buscaPorLargura(){
        console.log("Busca em largura");
        BuscaBLargura.buscar(this.raiz);
    }


}
export default Arvore;