import Arvore from "./BuscaBinaria.js";
import No from "./No.js";
import BuscaBprofundidade from "./BuscaBprofundidade.js";

let arvoreB = new Arvore("100");

let noA = arvoreB.raiz;
let noB = new No("50");
let noC = new No("C");
let noD = new No("D");
let noE = new No("E");
let noF = new No("F");

noA.adicionarFilhoE(noB);
noA.adicionarFilhoD(noC);
noB.adicionarFilhoE(noF);
noC.adicionarFilhoE(noD);
noC.adicionarFilhoD(noE);

arvoreB.buscarPpreordem();