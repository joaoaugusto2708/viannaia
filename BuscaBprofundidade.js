class BuscaBprofundidade{

    static preordem(no){

        if(!no){
            return;
        }

     
        console.log(no.valor);

        BuscaBprofundidade.preordem(no.filhoE);
        BuscaBprofundidade.preordem(no.filhoD);

    }

    static posordem(no){
        if(!no){
            return;
        }

        console.log(no.valor);

        BuscaBprofundidade.posordem(no.filhoE);
        console.log(no.valor);
        BuscaBprofundidade.preordem(no.filhoD);

    }

    static posordem(no){
        if(!no){
            return;
        }


        BuscaBprofundidade.posordem(no.filhoE);
        console.log(no.valor);
        BuscaBprofundidade.preordem(no.filhoD);

    }

    static inOrdem(no){
        if(!no){
            return;
        }

        BuscaBprofundidade.posordem(no.filhoE);
        BuscaBprofundidade.preordem(no.filhoD);
        console.log(no.valor);

    }


}

export default BuscaBprofundidade;