const numeros = [];
numeros[0] = 8;
numeros[1] = 4;
numeros[2] = 29;

const inventores = [];
inventores[0] = "Einstein";
inventores[1] = "Edson";
inventores[2] = "Galileu";
inventores[3] = "Da Vinci";

console.log(inventores[3]);
console.log(inventores.length);

inventores.push("João");
console.log(inventores);
inventores.splice(1);
console.log(inventores);

const numero2 = [];
for (var i = 0; i < 10; i++) numero2[i] = 1;

/* ou
    const numero2 = [];
    for(let i=0; i < 10; i++)
        numero2.push(1);
 */

for (let i = 0; i < numero2.length; i++) {
  console.log(`numero no índice ${i}: ${numero2[i]}`);
}
