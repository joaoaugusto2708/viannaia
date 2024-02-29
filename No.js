class No{
    valor = "";
    filhoE = null;
    filhoD = null;
    constructor(valor){
        this.valor = valor;
    }

    adicionarFilhoD(no){
        if(no instanceof No)
        this.filhoD = no;
        else{
            
          
                throw new Error("Filho deve ser NO")
        
           
        }
    }

    adicionarFilhoE(no){
        if(no instanceof No)
        this.filhoE = no;
        else{
            
          
                throw new Error("Filho deve ser NO")
        
           
        }
    }

}

export default No;