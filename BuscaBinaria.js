import No from "./No.js";
class BuscaBinaria{
    raiz = null;
        constructor(valor){
            this.raiz = new No(valor);

        }
        buscar(valor){
            let noAtual = this.raiz;
            while(noAtual !== null){
                if(valor == noAtual.valor){
                    return true;
                }else if(valor < noAtual.valor){
                    noAtual = noAtual.filhoE;
                }else{
                    noAtual = noAtual.filhoD;
                }
            }
            return false;

         
}

inserir(valor){
    const novoNo = new No(valor);
         if(this.raiz == null){
            this.raiz = novoNo;
            return this.raiz;

         }else{
            let noAtual = this.raiz;
            while(true){
                if(valor < noAtual.valor){
                    if(noAtual.filhoE == null){
                        noAtual.filhoE = novoNo;
                        return novoNo;
                    } 
                    noAtual = noAtual.filhoE;
                }else{
                    if(noAtual.filhoD == null){
                        noAtual.filhoD = novoNo;
                        return novoNo;
                    }
                }
            }
         }

    }
 
        

}

export default BuscaBinaria;