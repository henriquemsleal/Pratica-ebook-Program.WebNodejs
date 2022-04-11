const cliente = {};
cliente.nome = "Luiz";
cliente.exibirMensagem = function (msg) {
  console.log(msg);
};
console.log(cliente);
cliente.exibirMensagem("teste");
