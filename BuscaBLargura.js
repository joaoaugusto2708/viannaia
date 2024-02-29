
class BuscaBLargura {
  static buscar(raiz) {
    let atual;
    let lista = new Array();
    if (!raiz) {
      return;
    }
    lista.push(raiz);

    while (lista.length > 0) {
      atual = lista.shift();
      console.log(atual.valor);

      if (atual.filhoE) {
        lista.push(atual.filhoE);
      }
      if (atual.filhoD) {
        lista.push(atual.filhoD);
      }
    }
  }
}

export default BuscaBLargura;