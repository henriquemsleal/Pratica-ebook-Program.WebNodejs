let x = 0;
if (x === 0) {
  console.log("X é zero!");
  x++;
}

let x2 = 0;
if (x2 % 2 === 0) {
  console.log("x2 é PAR!");
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " é PAR!");
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " é PAR!");
  }
  console.log(i + " é ÍMPAR!"); // errado, pois vai executar em todos
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " é PAR!");
  } else {
    console.log(i + " é ÍMPAR!"); // forma correta
  }
}

for (let i = 0; i < 10; i++) {
  if (i >= 5) {
    if (i <= 7) {
      console.log("FUNCIONOU");
    }
  }
}

for (let i = 0; i < 10; i++) {
  if (i >= 5 && i <= 7) {
    console.log("FUNCIONOU");
  }
}
