function sorteioPessoa(){
  var pessoas = document.getElementById('nomes').value;
  var nomes = pessoas.split("\n");
  var x = 0;
  x = nomes.length;
  var y = Math.floor((Math.random() * x));
  document.getElementById('nomes_sorteio').innerHTML="Pessoa Sorteada: " + nomes[y];
}

function sorteioPremio(){
  var premios = document.getElementById('premios').value;
  var nomes_premio = premios.split("\n");
  var x = 0;
  x = nomes_premio.length;
  var y = Math.floor((Math.random() * x));
  document.getElementById('premios_sorteio').innerHTML="Premio Sorteado: " + nomes_premio[y];
}
