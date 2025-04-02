function incrementar() {
    let contadorElemento = document.getElementById("contador");
    let contador = parseInt(contadorElemento.innerText);
    contador++;
    contadorElemento.innerText = contador;
}
