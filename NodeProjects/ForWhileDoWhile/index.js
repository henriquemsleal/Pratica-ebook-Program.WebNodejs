for (let i = 0; i < 10; i++) console.log("i=" + i); // única instrução sem chaves

for (let i = 0; i < 10; i++) {
  console.log("i=" + i);
  //outra instrução qualquer, quantas quiser
}

let chave = true;
while (chave === true) {
  //outra instrução qualquer
  console.log("Imprime!");
  chave = false;
}

let i = 0;
while (i < 10) {
  //outra instrução qualquer
  console.log("Imprime!");
  i++;
}

let chave2 = false;
do {
  //outra instrução qualquer
  console.log("Imprime!");
} while (chave === true);

let x2 = 0;
while (x2 < 10) console.log(x2++);

let x = 0;
do {
  console.log(x);
} while (x++ < 10);
